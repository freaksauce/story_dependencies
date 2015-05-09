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
