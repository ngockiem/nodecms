const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({

  title: {
    type: string,
    required: true
  }

  status: {
    type: string,
    default: 'public'
  }

  description: {
    type: string,
    required: true
  }

  creationDate: {
    default: Date.now()
  }

});
