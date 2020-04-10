'use strict';

var mongoose = require('mongoose'),
  Tag = mongoose.model('Tags'),
  Room = mongoose.model('Rooms');

exports.list_all_tags = function(req, res) {
  Tag.find({}, function(err, result) {
    if (err) res.send(err);
    res.json(result);
  });
};

exports.list_all_rooms = function(req, res) {
  Room.find({}, function(err, result) {
    if (err) res.send(err);
    res.json(result);
  });
};

exports.read_a_room_details = function(req, res) {
  Room.find({ id: req.params.roomId }, function(err, result) {
    if (err) res.send(err);
    res.json(result);
  });
};
