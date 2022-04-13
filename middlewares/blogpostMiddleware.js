const Joi = require('joi');

const blogpostSchema = Joi.object({
    title: Joi.string()
    .required(),
    categoryIds: Joi.array()
    .required(),
    content: Joi.string()
    .required(),
});

const isValidPost = (req, _res, next) => {
    const { error } = blogpostSchema.validate(req.body);
    if (error) throw error;
    next();
  };
  
  module.exports = isValidPost; 