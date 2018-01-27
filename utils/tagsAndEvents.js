import * as firebase from 'firebase'
import database from '../fire'

var tagsToEvents = {}

export const getAllTags = function() {
  var events = {};
  var ref = firebase.database().ref('events');
  //var ref = database.ref('events');
  var set = new Set();
  ref.once("value", function(snapshot) {
      snapshot.forEach(function(childSnapShot) {
          for (var i in childSnapShot.val().tags) {
              set.add(childSnapShot.val().tags[i]);
              if (tagsToEvents[childSnapShot.val().tags[i]]) {
                  tagsToEvents[childSnapShot.val().tags[i]].push(childSnapShot.val());
              }
              else {
                  tagsToEvents[childSnapShot.val().tags[i]] = [childSnapShot.val()];
              }
          }
      });
  });
  return set;
}

