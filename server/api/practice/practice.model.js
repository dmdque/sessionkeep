'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema
    , ObjectId = Schema.Types.ObjectId;


var PracticeSchema = new Schema({
  name: String
  , info: String
  , active: Boolean
  // location
  , location: {type: ObjectId, ref: 'Location'}

  // user
  , user: {type: ObjectId, ref: 'User'}
  , start_time: {type: Date, default: Date.now}
  , stop_time: {type: Date}
});

module.exports = mongoose.model('Practice', PracticeSchema);
