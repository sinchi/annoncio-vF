import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Messages } from './messages';
import { Annonces } from './annonces';

export const Conversations = new Mongo.Collection('conversations');

if(Meteor.isServer){
	Meteor.publish('conversations', function(){
		return Conversations.find({ 
				$or:[
				{ originatingFromId: this.userId }, 
				{ originatingToId: this.userId }
			] 
		});
	});


	Meteor.publishComposite('conversations.last_message', function(){
	  return {
		    find: function(){
		      return Conversations.find({
		      	$or:[
		      				{ originatingFromId: this.userId }, 
		      				{ originatingToId: this.userId }
		      		]
		      });
		    },
		    children:[
		      {
		        find: function(conversation){
		          // let conversationId = "YN77nSz5AJxXBvXx8";
		          // if(conversation._id === conversationId)
		          //   return ConversationMessages.find({ conversationId: conversation._id }, {sort:{ order: -1 }, limit:3} ); load more for one conversation without load all

		          return Messages.find({ conversationId: conversation._id }, {sort:{ createdAt: -1 }, limit:23} );
		        },
		        children:[
		          {
		            find: function(message, conversation){
		              if(message.from.userId === this.userId)
		                return Meteor.users.find({ _id: message.to.userId }, { fields: { profile : 1 } });

		              return Meteor.users.find({ _id: message.from.userId }, { fields : { profile: 1 } });
		            }		            
		          }
		        ]
		      }
		    ]
		  }
	});
}

Meteor.methods({
	'conversations.insert'(conversation){
		check(conversation, Object);
		if(conversation.originatingFromId === Meteor.userId() || conversation.originatingToId === Meteor.userId()){
			return Conversations.insert(conversation);
		}else{
			throw new Meteor.Error('Vous devez connecter pour faire une discussion');
		}
	},

	'conversations.setVisible'(visible, conversationId){
		check(conversationId, String);
		check(visible, Boolean);	

		if(!Meteor.userId())	{
			throw new Meteor.Error('vous devez etre connecter pour faire ce changement ');
		}

		let conversation = Conversations.findOne(conversationId);	


		if(conversation.originatingFromId === Meteor.userId()){
			return Conversations.update({ _id: conversationId, "statusFrom.userId": Meteor.userId() }, {$set:{ "statusFrom.visible": visible }});	
		}else{
			return Conversations.update({ _id: conversationId, "statusTo.userId": conversation.originatingToId }, {$set:{ "statusTo.visible": visible }});	
		}				 
		
	},

	'conversations.setStand'(stand, conversationId){
		check(conversationId, String);
		check(stand, Boolean);	

		if(!Meteor.userId())	{
			throw new Meteor.Error('vous devez etre connecter pour faire ce changement ');
		}

		const conversation = Conversations.findOne(conversationId);

		if(conversation.originatingFromId === Meteor.userId()){
			return Conversations.update({ _id: conversationId, "statusFrom.userId": Meteor.userId() }, $set:{ "statusFrom.stand": stand });	
		}else{
			return Conversations.update({ _id: conversationId, "statusTo.userId": conversation.originatingToId }, $set:{ "statusTo.stand": stand });	
		}		
		
	}
});