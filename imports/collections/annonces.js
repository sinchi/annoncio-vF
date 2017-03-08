import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export default Annonces = new Mongo.Collection('annonces');

if(Meteor.isServer){
  Meteor.publish('annonces', function allAnnonces(search){
     check(search, Object);
     console.log(search);
    return Annonces.find({
      $and:[
        {
          $or: [
            { moderated: false },
            { 'owner.id': this.userId },
          ]
        },
        search
      ]

    }, { sort: { createdAt: -1 } });
  });

  Meteor.publish('annoncesOwner', function getAnnoncesOwner(){
    return Annonces.find({ 'owner.id': this.userId })
  });

}

Meteor.methods({
  'annonces.insert'(annonce){
    check(annonce, Object);

    if(!Meteor.userId){
      throw new Meteor.Error('Merci de vous authentifiez pour créer cette annonce');
    }

    let owner = Meteor.users.findOne(this.userId);
    annonce.owner = { "id" : owner._id, "email": owner.emails[0].address, image: "http://arswiki.info/twiki/pub/Main/UserProfileHeader/default-user-profile.jpg" };
    annonce.createdAt = new Date();
    annonce.moderated = false;

    const id = Annonces.insert(annonce);
    return id;
  }
});
