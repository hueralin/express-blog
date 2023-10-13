const Joi = require('joi');

const createPost = {
  body: Joi.object({
    title: Joi.string().min(1).max(50).required(),
    description: Joi.string(),
    content: Joi.string(),
    author_id: Joi.number().integer().required(),
    tag_id: Joi.number().integer(),
    category_id: Joi.number().integer(),
    status: Joi.number().integer().valid(-1, 0, 1),
  }),
};

const queryPost = {
  query: {
    // 分页
    pageNum: Joi.number().integer().required(),
    pageSize: Joi.number().integer().required(),
    // 搜索
    title: Joi.string(),
    // 筛选
    author_id: Joi.number(),
    tag_id: Joi.number().integer(),
    category_id: Joi.number().integer(),
    status: Joi.number().integer().valid(-1, 0, 1),
    // 排序
    created_at: Joi.date(),
    updated_at: Joi.date(),
  },
};

module.exports = {
  createPost,
  queryPost,
};
