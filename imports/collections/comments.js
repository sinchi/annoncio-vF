import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import  {Annonces}  from './annonces';


export const Comments = new Mongo.Collection('comments');

if(Meteor.isServer){
  Meteor.publish('comments', function(annonceId){
    check(annonceId, String);
    return Comments.find({ annonceId: annonceId });
  })
}


Meteor.methods({
  'comments.insert'(comment){
    check(comment, Object);
    if(!Meteor.userId()){
      throw new Meteor.Error('Merci de vous authentifiez pour publier ce commentaire!');
    }

    let annonce = Annonces.findOne({ _id: comment.annonceId });
    if(!annonce){
      throw new Meteor.Error("L'annonce sur laquel vous avez commenté a été supprimé ou bien caché par leur propriétaire");
    }
    let commentId = Comments.insert(comment);
    let notifer = Meteor.users.findOne({_id: Meteor.userId() });

    let name = notifer.emails[0].address.split('@')[0];

    let notification = {
      notiferName: name,
      action: 'comment',
      icon:"comment-o",
      createdAt: new Date(),
      content: comment.content,
      text: `a commenté sur votre annonce `,
      annonceId: comment.annonceId,
      commentId: commentId,
      ownerId: annonce.owner.id,
      read: false
    };
    Meteor.call('notifications.insert', notification);
  }
})
