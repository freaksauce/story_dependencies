Meteor.startup(function () {
	//fixture
	/*if (StoriesCollection.find().count() === 0) {
		var stories = [
										{
											id: 'UI1',
											name: 'UI Story 1',
											dependencies: [
												'UX2','UX3'
											]
										},
										{
											id: 'UI2',
											name: 'UI Story 2',
											dependencies: ['UX3']
										},
										{
											id: 'UI3',
											name: 'UI Story 3',
											dependencies: ['UX1']
										},
										{
											id: 'UX1',
											name: 'UX Story 1',
											dependencies: ['UI1']
										},
										{
											id: 'UX2',
											name: 'UX Story 2',
											dependencies: ['UI2']
										},
										{
											id: 'UX3',
											name: 'UX Story 3',
											dependencies: ['UI3']
										}
									];
									console.log(stories);
		while (stories.length > 0) {
			console.log('add')
			StoriesCollection.insert(stories.pop());
		}
		console.log("Added fixtures");
	}*/
});

Meteor.publish('stories', function() {
	return StoriesCollection.find();
});

Meteor.methods({
  addStory: function(storyObj) {
    console.log('METHOD: addStory');
    if (!storyObj) {
      return false;
    }

    return StoriesCollection.insert({
      id: storyObj.ID,
      name: storyObj.name,
      dependencies: storyObj.deps
    });

  },
  removeStory: function(storyId) {
    console.log('METHOD: removeStory');
    return StoriesCollection.remove({
      _id: storyId
    })
  },
  editStory: function(storyId) {
  	console.log('METHOD: editStory');
  }
});
