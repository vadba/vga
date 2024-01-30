import {
  getMainPosts,
  getPostById,
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
  getPostsByCategory,
  getRecentPostsByCategories,
  getPostBySlug,
} from "./PostDataAccess.js";

export const createPostService = async (postData) => {
  try {
    return await createPost(postData);
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getMainPostsService = async () => {
  try {
    return await getMainPosts();
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getPostsService = async (category) => {
  try {
    if (category) {
      return await getPostsByCategory(category);
    } else {
      return await getAllPosts();
    }
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getRecentPostsService = async (iDcategories) => {
  try {
    return await getRecentPostsByCategories(iDcategories);
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getPostService = async (postId) => {
  try {
    return await getPostById(postId);
  } catch (e) {
    throw new Error(e.message);
  }
};

export const getPostBySlugService = async (postId) => {
  try {
    return await getPostBySlug(postId);
  } catch (e) {
    throw new Error(e.message);
  }
};

export const modifyPostService = async (postId, postData) => {
  try {
    if (!postId) {
      throw new Error("ID was not set");
    }
    return await updatePost(postId, postData);
  } catch (e) {
    throw new Error(e.message);
  }
};

export const removePostService = async (postId) => {
  try {
    if (!postId) {
      throw new Error("ID was not set");
    }
    const order = await deletePost(postId);
    if (!order) {
      throw new Error("ID was not found or already deleted");
    }
    return order;
  } catch (e) {
    throw new Error(e.message);
  }
};
