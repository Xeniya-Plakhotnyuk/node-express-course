const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'require provide name'],
      trim: true,
      maxlength: [20, 'less than 20 characters'],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  })
  
  module.exports = mongoose.model('Task', TaskSchema)