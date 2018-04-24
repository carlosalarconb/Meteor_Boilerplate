Item = new Mongo.Collection("item");

Meteor.methods({
  'item.insert'(text) {
    Item.insert({
      valor:text
    });
  }
});
