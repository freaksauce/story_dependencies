Template.storyAdd.onCreated(function() {
  this.subscribe('stories');
});

Template.storyAdd.events({
  'submit #addStoryForm': function(evt, template) {
    evt.preventDefault();
    console.log('submit');
    var ID = $("input[name='ID']").val();
    if (ID === '') {
      $("input[name='ID']").addClass('invalid');
      return false;
    }
    var name = $('input[name="name"]').val();
    if (name === '') {
      $('input[name="name"]').addClass('invalid');
      return false;
    }

    var deps = $('input[name="deps"]').val();
    if (deps === '') {
      $('input[name="deps"]').addClass('invalid');
      return false;
    }

    depsArr = deps.split(',');

    console.log(ID);
    console.log(name);
    console.log(depsArr);

    var storyObj = {ID:ID, name:name, deps:depsArr};

    Meteor.call('addStory', storyObj, function(err, result) {
      if (err) {
        console.log('[ERROR]:\n');
        console.log(err);
        return;
      }
      if (result) {
        console.log(result);
      }
    });

  }
});
