import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Conversations } from './conversations';
import { Annonces } from './annonces';

export const Messages = new Mongo.Collection('messages');

if(Meteor.isServer){
	 Meteor.publish('messages', function(conversationId){
	 	return Messages.find( { conversationId: conversationId } , { sort: { createdAt: -1 }, limit: 5 });
	});

	 Meteor.publish('last_message', function(annonceId){
	 	return Messages.find({ annonceId: annonceId }, { sort: { createdAt: -1 }, limit: 1 });
	 });
}

Meteor.methods({
	'messages.insert_new'(messageBody, annonceId){		
		check(messageBody, String);
		check(annonceId, String);
		const annonce = Annonces.findOne(annonceId);		
		const findConversation = Conversations.findOne({
			$or:[
				{
					$and:[
						{ originatingFromId: Meteor.userId() },
						{ originatingToId: annonce.owner.id },
						{ "annonce._id": annonce._id }
					]
				},
				{
					$and:[
						{ originatingFromId: annonce.owner.id },
						{ originatingToId: Meteor.userId() },
						{ "annonce._id": annonce._id }
					]
				}
				
			]
		});
		if(!findConversation){
			const conversation = {
				originatingFromId: Meteor.userId(),
				originatingToId: annonce.owner.id,
				originatingFromName: Meteor.users.findOne(Meteor.userId()).emails[0].address.split('@')[0],
				originatingToName: annonce.owner.email.split('@')[0],
				annonce: annonce				
			};
			const conversationId = Conversations.insert(conversation);
			const message = {
				conversationId: conversationId,
				from: { 
					userId: Meteor.userId(), 
					username : Meteor.users.findOne(Meteor.userId()).emails[0].address.split('@')[0]
				},
				to: {
					userId: annonce.owner.id,
					read: false,
					username: annonce.owner.email.split('@')[0]
				},
				body: messageBody,
				createdAt: new Date()				
			};
			Messages.insert(message);
		}
	

		// if(message.from.userId === Meteor.userId()){
		// 	let conversation = Conversations.findOne({ annonceId: message.annonceId });
		// 	if(conversation){
		// 		Messages.insert(message);
		// 	}else{
		// 		conversation = {
		// 			originatingFromId: message.from.userId,
		// 			originatingFromName: message.from.username,
		// 			originatingToId: message.to.userId,
		// 			originatingToName: message.to.username,
		// 			annonceId: message.annonceId
		// 		};
		// 		Meteor.call('conversations.insert', conversation);
		// 		Messages.insert(message);
				
		// 	}
		// }else{
		// 	throw new Meteor.Error('Vous devez connecter pour faire une conversation !');
		// }			

	},

	'messages.insert'(messageBody, conversation){
		check(messageBody, String);
		check(conversation, Object);

		
		const message = {
			conversationId: conversation._id,
			from: {
				userId: Meteor.userId(),
				username : Meteor.users.findOne(Meteor.userId()).emails[0].address.split('@')[0]
			  },
			to: {
				userId: conversation.annonce.owner.id,
				read: false,
				username: conversation.annonce.owner.email.split('@')[0]
			},
			body: messageBody,
			createdAt: new Date()			
		};
		Messages.insert(message);
		
	}

	
});

