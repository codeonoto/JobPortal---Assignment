// Please don't change the pre-written code
// Import the necessary modules here

import mongoose from "mongoose";

export const likeSchema = new mongoose.Schema({
  // Write your code here
  user : {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: 'User'
  },
  likeable: {
    type: mongoose.Schema.ObjectId,
    refPath: 'on_model'
  },
  on_model: {
    type: String,
    required: true,
    enum: ['User','Job']
  }

});
