import {
  createPostService,
  getMainPostsService,
  getPostBySlugService,
  getPostService,
  getPostsService,
  getRecentPostsService,
  modifyPostService,
  removePostService,
} from "./PostService.js";

export const createPosts = async (req, res) => {
  try {
    const createdPost = await createPostService(req.body);
    res.json(createdPost);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const getMainPosts = async (req, res) => {
  try {
    const posts = await getMainPostsService();
    return res.json(posts);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const { category } = req.query;
    const posts = await getPostsService(category);
    return res.json(posts);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const getRecentPosts = async (req, res) => {
  try {
    const { iDcategories } = req.query;
    const posts = await getRecentPostsService(iDcategories);
    return res.json(posts);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const getPost = async (req, res) => {
  try {
    const { postId } = req.query;
    const post = await getPostService(postId);
    return res.json(post);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const getPostBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const post = await getPostBySlugService(slug);
    return res.json(post);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const updatePost = async (req, res) => {
  try {
    const updatedPost = await modifyPostService(req.body.id, req.body);
    return res.json(updatedPost);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await removePostService(req.params.id);
    return res.json(post);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const PostController = {
  createPosts,
  getMainPosts,
  getAllPosts,
  getRecentPosts,
  getPost,
  getPostBySlug,
  updatePost,
  deletePost,
};
