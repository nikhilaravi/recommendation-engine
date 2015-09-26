'use strict';
var DB = require('./DBhandlers.js');

function trackRatings(engine, type) {
  addRating: function(user, item, callback) {
    DB.insertRating(type, user, item callback)
  },
  removeRating: function(user, item, callback) {
    DB.removeRating(type, user, item, callback)
  },

  return {
    addRating: addRating,
    removeRating: removeRating,
  }
}

module.exports = trackRatings;
