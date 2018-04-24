import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup

  //for autopublish
  Meteor.publish('items', function(){
    return Item.find();
  });

});
