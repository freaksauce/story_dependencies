Template.storyEdit.onCreated(function() {
  this.subscribe('stories');
});

Template.storyEdit.helpers({
  Story: function() {
    var storyId = parseInt(Session.get('storyId'));
    story = StoriesCollection.findOne({storyId: storyId});
    return story;
  }
});

Template.storyEdit.events({
  'submit #editStoryForm': function(evt, template) {
    console.log('update');
    evt.preventDefault();

    var name = $('input[name="name"]').val().trim();
    if (name === '') {
      $('input[name="name"]').addClass('invalid');
      return false;
    }

    var deps = $('input[name="deps"]').val();
    deps = deps.replace(/ /g,''); // remove spaces from dependecies before creating array
    depsArr = deps.split(',');

    var storyObj = {name:name, deps:depsArr};

    Meteor.call('editStory', storyObj, function(err, result) {
      if (err) {
        console.log('[ERROR]:\n');
        console.log(err);
        return;
      }
      if (result) {
        console.log(result);
        // Router.go('home');
      }
    });
  }
});
