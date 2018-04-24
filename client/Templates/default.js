Template.default.events({

  'click .js-insert':function () {
    var value = $("#value").val();
    Meteor.call('item.insert', value);
  }

});

Template.default.helpers({
  getItems: function(){
    return  Item.find({});
  }
})

Template.default.onCreated(function(){
  Meteor.subscribe('items');
});
