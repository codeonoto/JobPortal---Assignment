// Please don't change the pre-written code
// Import the necessary modules here
import mongoose from "mongoose";
import { likeSchema } from "./like.schema.js";
const LikeModel = mongoose.model('Like', likeSchema);

export const likeRepo = async (user_id, job_id, model) => {
  // Write your code here
  try {
    const newLike = new LikeModel({
      user: user_id,
      likeable: job_id,
      on_model: model,
    });
    return await newLike.save();
  } catch (error) {
    throw error;
  }
};
export const getLikesRepo = async (id, on_model) => {
  // Write your code here
  try {
    const likes = await LikeModel.findById({user: id, on_model: on_model}).populate('user').populate('likeable');
    return likes;
  } catch (error) {
    throw error;
  }
};
