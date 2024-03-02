// Please don't change the pre-written code
// Import the necessary modules here

import mongoose from "mongoose";

export const applyJobSchema = new mongoose.Schema({
  // Write your code here
  jobId: {
    type: mongoose.Schema.ObjectId,
    ref: 'Job',
    required: [true, "job id required"]
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, "userId of the applicant is required"]
  }
  
});