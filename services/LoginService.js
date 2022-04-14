const { User } = require('../models');

const createLogin = async (email, password) => {
 const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) return { invalidFields: 'Invalid fields' };

  return user;
};

module.exports = {
  createLogin,
};