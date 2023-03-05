const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: 
    {
      type: String,
      unique: true,
      trim: true,
      required: true,
      match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    },
  messageText: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 1000,
  }
});

const Message = model('Message', profileSchema);

module.exports = Message;
