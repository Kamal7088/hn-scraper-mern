const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  hnId: {
    type: String,
    required: true,
    unique: true // Prevent duplicate stories
  },
  title: {
    type: String,
    required: true
  },
  url: {
    type: String
  },
  points: {
    type: Number,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  postedAt: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Story', storySchema);
