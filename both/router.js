Router.route('/', function() {
	this.render('home');
	this.layout('defaultLayout');
});

Router.route('/add', function () {
  this.render('story.add');
	this.layout('defaultLayout');
}, {
  name: 'story.add'
});