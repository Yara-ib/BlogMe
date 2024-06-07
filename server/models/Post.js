// Importing Mongoose; 3rd party package to handle MongoDB database in easier way
const mongoose = require('mongoose');

// Creating the Schema object by calling the method on mongoose
const Schema = mongoose.Schema;

// Creating the Schema model for Posts in the blog;
// By creating new instance of the object Schema
const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Exporting the model to be able to access it from anywhere in the server
module.exports = mongoose.model('Post', PostSchema);
