const { User } = require('../models');

const getAll = async () => {
    const users = await User.findAll();

    return users;
};

const getById = async (id) => {
  const user = await User.findByPk(id);
  return user;
};
  
const ServiceCreate = async (user) => {
  const validated = await User.findOne({ where: { email: user.email } });
  console.log(validated);

  if (validated) return { message: 'User already registered' };

  const created = await User.create(user);

  return created;
};

module.exports = { 
  ServiceCreate,
  getAll,
  getById,
};