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
		var latestId = StoriesCollection.findOne({}, {sort: {storyId: -1} });
		// increment latest ID and save to storyObj ready for save
		console.log(latestId);
		if (latestId != undefined) {
			storyObj.storyId = parseInt(latestId.storyId) + 1;
		}else{
			console.log('no id available');
			storyObj.storyId = 1;
		}

    return StoriesCollection.insert({
      storyId: storyObj.storyId,
      name: storyObj.name,
      dependencies: storyObj.deps
    });

  },
  removeStory: function(storyId) {
    console.log('METHOD: removeStory');
    return StoriesCollection.remove({
      storyId: storyId
    })
  },
  editStory: function(storyObj) {
  	console.log('METHOD: editStory');
		if (!storyObj) {
      return false;
    }
		console.log(storyObj);
		var storyId = storyObj.storyId;
		var name = storyObj.name;
		var dependencies = storyObj.deps;
		return StoriesCollection.update(
			{storyId: storyId}, {$set: {name: name, dependencies: dependencies}}
    );
  }
});
