import { Accounts } from 'meteor/accounts-base';

Meteor.methods({
  'user.sendVerificationLink': function(){
    let user = Meteor.user();
  Meteor.setTimeout(function () {
      Accounts.sendVerificationEmail(user._id);
    }, 2 * 1000);

  }
})
