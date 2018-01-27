import * as firebase from 'firebase'
import database from '../fire'

var tagsToEvents = {}

export const getAllTags = function() {
    var events = {};
    var ref = firebase.database().ref('events');
    var tags = [];
    ref.once("value", function(snapshot) {
        snapshot.forEach(function(childSnapShot) {
            for (var i in childSnapShot.val().tags) {
                if (tags.indexOf(childSnapShot.val().tags[i])===-1) {
                    tags.push(childSnapShot.val().tags[i]);
                }
                if (tagsToEvents[childSnapShot.val().tags[i]]) {
                    tagsToEvents[childSnapShot.val().tags[i]].push(childSnapShot.val());
                }
                else {
                    tagsToEvents[childSnapShot.val().tags[i]] = [childSnapShot.val()];
                }
            }
        });
    });
    return tags;
}