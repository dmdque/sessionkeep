'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PracticeSchema = new Schema({
  name: String
  , info: String
  , active: Boolean

  // user
  , start_time: {type: Date, default: Date.now}
  , stop_time: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Practice', PracticeSchema);
