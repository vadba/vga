import mongoose from "mongoose";
import PostDB from "./PostsModel.js";

export const getMainPosts = async () => {
  try {
    return await PostDB.find({ inMain: true });
  } catch (e) {
    throw new Error(e.message);
  }
};

// export const getPostsByUser = async (userId) => {
//   try {
//     const objectIdUser = new mongoose.Types.ObjectId(userId);
//     return await PostDB.find({ user: objectIdUser });
//   } catch (e) {
//     throw new Error(e.message);
//   }
// };

export const getPostById = async (id) => {
  try {
    return await PostDB.findById(id);
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getPostBySlug = async (id) => {
  try {
    return await PostDB.findById(id);
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getPostsByCategory = async (category) => {
  try {
    return await PostDB.find({ categories: { $in: category } }).sort({
      createdAt: -1,
    });
  } catch (e) {
    throw new Error(e.message);
  }
};
export const getRecentPostsByCategories = async (iDcategories) => {
  try {
    let posts = [];
    for (const category of iDcategories) {
      const post = await PostDB.find({ categories: { $in: category } })
        .sort({
          createdAt: -1,
        })
        .limit(1);
      posts.push(...post);
    }
    return posts;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getAllPosts = async () => {
  try {
    return await PostDB.find().sort({ createdAt: -1 });
  } catch (e) {
    throw new Error(e.message);
  }
};

export const createPost = async (postData) => {
  try {
    return await PostDB.create(postData);
  } catch (e) {
    throw new Error(e.message);
  }
};

export const updatePost = async (orderId, orderData) => {
  try {
    return await PostDB.findByIdAndUpdate(orderId, orderData, { new: true });
  } catch (e) {
    throw new Error(e.message);
  }
};

export const deletePost = async (postId) => {
  try {
    return await PostDB.findByIdAndDelete(postId);
  } catch (e) {
    throw new Error(e.message);
  }
};
