import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Notifications = new Mongo.Collection('notifications');

if(Meteor.isServer){
  Meteor.publish('notifications', function(ownerId){
    check(ownerId, String);
    return Notifications.find({ ownerId: ownerId, read: false });
  });
}

Meteor.methods({
  'notifications.insert'(notification){
    check(notification, Object);
    if(notification.ownerId !== Meteor.userId()){
        Notifications.insert(notification);
    }

  }
});
