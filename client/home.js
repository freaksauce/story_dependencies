Template.home.onCreated(function() {
});

Template.home.onRendered(function() {

  this.subscribe('stories', function() {
    stories = StoriesCollection.find().fetch();
    // console.log(stories);

    nodesArr = [];
    edgesArr = [];

    _.map(stories, function(story) {
      // loop stories and save nodes to arr
      var tmpNodesObj = { data: { id: story.id.toString(), name: story.name } };
      nodesArr.push(tmpNodesObj);
      // now within loop get dependices of story and add to edges arr
      var storyLen = story.dependencies.length;
      for(i=0; i<storyLen; i++) {
        var tmpEdgesObj = { data: { source: story.id.toString(), target: story.dependencies[i] } };
        edgesArr.push(tmpEdgesObj);
      }
    });

    console.log(edgesArr);
    // console.log(nodesArr);

    $('#cy').cytoscape({
      style: cytoscape.stylesheet()
        .selector('node')
          .css({
            'content': 'data(name)',
            'text-valign': 'center',
            'color': 'white',
            'text-outline-width': 2,
            'text-outline-color': '#888'
          })
        .selector('edge')
          .css({
            'target-arrow-shape': 'triangle'
          })
        .selector(':selected')
          .css({
            'background-color': 'black',
            'line-color': 'black',
            'target-arrow-color': 'black',
            'source-arrow-color': 'black'
          })
        .selector('.faded')
          .css({
            'opacity': 0.25,
            'text-opacity': 0
          }),

      elements: {
        nodes: nodesArr,
        edges: edgesArr

        // nodes: [
        //   { data: { id: 'j', name: 'Jerry' } },
        //   { data: { id: 'e', name: 'Elaine' } },
        //   { data: { id: 'k', name: 'Kramer' } },
        //   { data: { id: 'g', name: 'George' } }
        // ],
        // edges: [
        //   { data: { source: 'j', target: 'e' } },
        //   { data: { source: 'j', target: 'k' } },
        //   { data: { source: 'j', target: 'g' } },
        //   { data: { source: 'e', target: 'j' } },
        //   { data: { source: 'e', target: 'k' } },
        //   { data: { source: 'k', target: 'j' } },
        //   { data: { source: 'k', target: 'e' } },
        //   { data: { source: 'k', target: 'g' } },
        //   { data: { source: 'g', target: 'j' } }
        // ]
      },

      layout: {
        name: 'grid',
        padding: 10
      },

      // on graph initial layout done (could be async depending on layout...)
      ready: function(){
        window.cy = this;

        // giddy up...

        cy.elements().unselectify();

        cy.on('tap', 'node', function(e){
          var node = e.cyTarget;
          var neighborhood = node.neighborhood().add(node);

          cy.elements().addClass('faded');
          neighborhood.removeClass('faded');
        });

        cy.on('tap', function(e){
          if( e.cyTarget === cy ){
            cy.elements().removeClass('faded');
          }
        });
      }
    });

  });


});

Template.home.helpers({

});

Template.home.events({

});
