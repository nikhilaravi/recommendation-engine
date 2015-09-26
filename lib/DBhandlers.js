'use strict';

var redis  = require('redis');
var client = redis.createClient();

module.exports = {
  insertRating: function(type, obj, callback){
    var multi = client.multi();
    multi.hmset("user:" + obj.username, obj)
    multi.sadd(type, obj.username)
  },

  deleteRating: function(){

  },

}
