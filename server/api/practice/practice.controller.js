'use strict';

var _ = require('lodash');
var Practice = require('./practice.model');

// Get list of practices
exports.index = function(req, res) {
  Practice.find()
  .populate('user')
  .exec(function (err, practices) {
    if(err) { return handleError(res, err); }
    return res.json(200, practices);
  });
};

// Get a single practice
exports.show = function(req, res) {
  Practice.findById(req.params.id, function (err, practice) {
    if(err) { return handleError(res, err); }
    if(!practice) { return res.send(404); }
    return res.json(practice);
  });
};

// Creates a new practice in the DB.
exports.create = function(req, res) {
  var practice = req.body;
  practice.user = req.user;
  console.log('practice: ', practice);
  Practice.create(practice, function(err, practice) {
    if(err) { return handleError(res, err); }
    return res.json(201, practice);
  });
};

// Updates an existing practice in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Practice.findById(req.params.id, function (err, practice) {
    if (err) { return handleError(res, err); }
    if(!practice) { return res.send(404); }
    var updated = _.merge(practice, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, practice);
    });
  });
};

// Deletes a practice from the DB.
exports.destroy = function(req, res) {
  Practice.findById(req.params.id, function (err, practice) {
    if(err) { return handleError(res, err); }
    if(!practice) { return res.send(404); }
    practice.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
