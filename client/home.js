Template.home.onCreated(function() {
  this.subscribe('stories');
});


Template.home.helpers({
  stories: function() {
    return StoriesCollection.find();
  }
});

Template.home.events({

});
