const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string()
    .min(8)
    .required(),
  password: Joi.string()
    .min(6)
    .required()
    .messages({
      'string.min': '"password" length must be 6 characters long',
    }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  image: Joi.string()
    .required(),
});

const isValidUser = (req, _res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) throw error;
  next();
};

module.exports = isValidUser; 