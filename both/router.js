Router.route('/', function() {
	this.render('home');
	this.layout('defaultLayout');
});

Router.route('/add', function () {
  this.render('storyAdd');
	this.layout('defaultLayout');
});