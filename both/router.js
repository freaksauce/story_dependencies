Router.route('/', function() {
	this.render('home');
	this.layout('defaultLayout');
},
{
	name: 'home'
});

Router.route('/add', function () {
  this.render('storyAdd');
	this.layout('defaultLayout');
},
{
	name: 'storyAdd'
});

Router.route('/edit', function () {
  this.render('storyEdit');
	this.layout('defaultLayout');
},
{
	name: 'storyEdit'
});

Router.route('/dependencies', function() {
	this.render('dependencies');
	this.layout('defaultLayout');
},
{
	name: 'dependencies'
});
