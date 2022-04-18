const Joi = require('joi');

const categorySchema = Joi.object({
    name: Joi.string()
    .min(6)
    .required(),
});

const isValidNameCategory = (req, _res, next) => {
    const { error } = categorySchema.validate(req.body);
    if (error) throw error;
    next();
  };
  
  module.exports = isValidNameCategory; 