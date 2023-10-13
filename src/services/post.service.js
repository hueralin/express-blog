const Post = require('../models/post.model');

/**
 * 创建 post
 * @param postBody
 * @returns {Promise<Model<any, TModelAttributes>>}
 */
const createPost = async (postBody) => {
  const post = await Post.create(postBody);
  return post;
};

const queryPost = async () => {};

module.exports = {
  createPost,
  queryPost,
};
