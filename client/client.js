Template.home.onCreated(function() {
  this.subHandle = Meteor.subscribe('stories');
});

Template.home.helpers({

});

Template.home.events({

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

  }
});