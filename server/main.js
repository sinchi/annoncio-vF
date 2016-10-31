import { Meteor } from 'meteor/meteor';
import { Cities } from '../imports/collections/cities';
import { Users } from '../imports/collections/users';
import _ from 'lodash';
import { address } from 'faker';

Meteor.startup(() => {
  // code to run on server at startup

 smtp = {
    username: 'ayoub.sinchi@gmail.com',   // eg: server@gentlenode.com
    password: '3afritto',   // eg: 3eeP1gtizk5eziohfervU
    server:   'smtp.gmail.com',  // eg: mail.gandi.net
    port: 587
  }

  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;

  const citiesNumber = Cities.find({}).count();
  console.log(citiesNumber);
  if(!citiesNumber){
    _.times(100, () => {
      Cities.insert({
        name: address.city()
      })
    });
  }

  Meteor.publish('cities', function(){
    return Cities.find({});
  });

});
