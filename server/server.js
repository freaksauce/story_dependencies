Meteor.startup(function () {
console.log('startup');
console.log(StoriesCollection.find().fetch());
	if (StoriesCollection.find().count() === 0) {
		var stories = [
										{
											id: 1,
											name: 'Story 1',
											dependencies: [
												2,3
											]
										},
										{
											id: 2,
											name: 'Story 2',
											dependencies: [3]
										},
										{
											id: 3,
											name: 'Story 3',
											dependencies: [1]
										}
									];
									console.log(stories);
		while (stories.length > 0) {
			console.log('add')
			StoriesCollection.insert(stories.pop());
		}
		console.log("Added fixtures");
	}
});

Meteor.publish('stories', function() {
	return StoriesCollection.find();
});