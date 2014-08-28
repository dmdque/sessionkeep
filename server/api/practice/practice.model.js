'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema
    , ObjectId = Schema.Types.ObjectId;


var PracticeSchema = new Schema({
  name: String
  , info: String
  , active: Boolean
  // location

  // user
  , user: {type: ObjectId, ref: 'User'}
  , start_time: {type: Date, default: Date.now}
  , stop_time: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Practice', PracticeSchema);
