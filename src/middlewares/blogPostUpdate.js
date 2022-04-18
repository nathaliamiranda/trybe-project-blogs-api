const Joi = require('joi');

const postSchema = Joi.object({
  title: Joi.string()
    .required(),
  content: Joi.string()
    .required(),
  categoryIds: Joi.string()
    .messages({
      'string.base': 'Categories cannot be edited',
    }),
});

const updatePost = (req, _res, next) => {
  const { error } = postSchema.validate(req.body);
  if (error) throw error;
  next();
};

module.exports = updatePost; 
