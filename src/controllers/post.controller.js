const catchAsync = require('../utils/catchAsync');
const postService = require('../services/post.service');
const httpStatus = require('http-status');

const createPost = catchAsync(async (req, res) => {
  const post = await postService.createPost(req.body);
  res.status(httpStatus.CREATED).send({ code: 0, msg: '', data: post });
});

const queryPost = catchAsync(async (req, res) => {
  const posts = await postService.queryPost();
  res.status(httpStatus.OK).send({ code: 0, msg: '', data: posts });
});

module.exports = {
  createPost,
  queryPost,
};
