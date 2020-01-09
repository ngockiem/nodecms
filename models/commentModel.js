const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  body: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  date: {
    type: Date,
    defaul: Date.now()
  },
  commentIsApprove: {
    type: Boolean,
    default: false
  }
});
module.exports = {Comment: mongoose.model('comment', CommentSchema)};
