const { User } = require('../models');

const ServiceCreate = async (user) => {
  const validated = await User.findOne({ where: { email: user.email } });
  console.log(validated);

  if (validated) return { message: 'User already registered' };

  const created = await User.create(user);

  return created;
};

module.exports = { 
  ServiceCreate,
};