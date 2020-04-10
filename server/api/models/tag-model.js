'use strict';

var mongoose = require('mongoose');
const newData = require('../../../public/fake_data/tags.json');

var Schema = mongoose.Schema;

var TagSchema = new Schema({
  code: {
    type: String,
    required: 'Kindly enter the code of the tag',
  },
  name: {
    type: String,
    required: 'Kindly enter the name of the tag',
  },
});

TagSchema.statics.initData = data => {
  data.remove({}, err => {
    newData.forEach(newRegister => {
      data.create(newRegister);
    });
  });
};

module.exports = mongoose.model('Tags', TagSchema);
