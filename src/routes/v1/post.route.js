const express = require('express');
const validate = require('../../middlewares/validate');
const checkLogin = require('../../middlewares/checkLogin');
const postValidation = require('../../validations/post.validation');
const postController = require('../../controllers/post.controller');

const router = express.Router();

router
  .route('/')
  .post(checkLogin, validate(postValidation.createPost), postController.createPost)
  .get(validate(postValidation.queryPost), postController.queryPost);

module.exports = router;
