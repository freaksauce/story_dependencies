/*Meteor.startup(function () {
	//fixture
	if (StoriesCollection.find().count() === 0) {
		var stories = [
										{
											id: '1',
											name: 'UI Story 1',
											dependencies: [
												'2','3'
											]
										},
										{
											id: '2',
											name: 'UI Story 2',
											dependencies: ['3']
										},
										{
											id: '3',
											name: 'UI Story 3',
											dependencies: ['1']
										},
										{
											id: '4',
											name: 'UX Story 1',
											dependencies: ['1']
										},
										{
											id: '5',
											name: 'UX Story 2',
											dependencies: ['2']
										},
										{
											id: '6',
											name: 'UX Story 3',
											dependencies: ['3']
										}
									];
									console.log(stories);
		while (stories.length > 0) {
			console.log('add')
			StoriesCollection.insert(stories.pop());
		}
		console.log("Added fixtures");
	}
});*/

Meteor.publish('stories', function() {
	return StoriesCollection.find();
});

Meteor.methods({
  addStory: function(storyObj) {
    console.log('METHOD: addStory');
    if (!storyObj) {
      return false;
    }

		// find the latest ID num
		var latestId = StoriesCollection.findOne({}, {sort: {id: -1} });
		// increment latest ID and save to storyObj ready for save
		console.log(latestId);
		if (latestId != undefined) {
			storyObj.id = parseInt(latestId.id) + 1;
		}else{
			console.log('no id available');
			storyObj.id = 1;
		}

    return StoriesCollection.insert({
      id: storyObj.id,
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
