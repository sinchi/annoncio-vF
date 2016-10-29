import { Meteor } from 'meteor/meteor';
import { Cities } from '../imports/collections/cities';
import _ from 'lodash';
import { address } from 'faker';

Meteor.startup(() => {
  // code to run on server at startup

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
