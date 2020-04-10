'use strict';
var mongoose = require('mongoose');
const newData = require('../../../public/fake_data/rooms.json');

var Schema = mongoose.Schema;

var RoomSchema = new Schema({
  id: {
    type: Number,
    required: 'Kindly enter the id of the room',
  },
  name: {
    type: String,
    required: 'Kindly enter the name of the room',
  },
  description: {
    type: String,
  },
  likeCount: {
    type: Number,
  },
  commentsCount: {
    type: Number,
  },
  price: {
    type: Number,
  },
  isGroupPrice: {
    type: Boolean,
  },
  isEditorsChoice: {
    type: Boolean,
  },
  image: {
    type: String,
  },
  tags: {
    type: [Number],
    default: [],
  },
});

RoomSchema.statics.initData = data => {
  data.remove({}, err => {
    newData.forEach(newRegister => {
      data.create(newRegister);
    });
  });
};

module.exports = mongoose.model('Rooms', RoomSchema);
