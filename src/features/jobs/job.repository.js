// Please don't change the pre-written code
// Import the necessary modules here

import mongoose, { Error } from "mongoose";
import { jobSchema } from "./schema/newJob.schema";
import { applyJobSchema } from "./schema/applyJob.schema";

const JobModel = mongoose.model('Job', jobSchema);
const ApplyJobModel = mongoose.model('ApplyJob', applyJobSchema);

export const createNewJob = async (job) => {
  // Write your code here
  try {
    const newJob = new JobModel(job);
    const savedJob = await newJob.save();
    return savedJob;
  } catch (error) {
    throw error;
  }
};

export const applyJobRepo = async (jobId, userId) => {
  // Write your code here
  try {
    const checkIfAlreadyApplied = await ApplyJobModel.findOne({ jobId, userId });
    if (checkIfAlreadyApplied) {
      return false;
    } else {
      // updateApplyJobModel
      await new ApplyJobModel({ jobId, userId }).save();
  
      // update jobModel applicants
      const filter = { _id: jobId };
      const update = { $push: { applicants: userId } };
      return await JobModel.findByIdAndUpdate(filter, update, {
        new: true,
      });
    }
  } catch (error) {
    throw error;
  }
};

export const findJobRepo = async (_id) => {
  // Write your code here
  try {
    const job = await JobModel.findById(_id);
    if(!job)
    {
      throw new Error("No job found.");
    }
    return job;
  } catch (error) {
    throw error;
  }

};
