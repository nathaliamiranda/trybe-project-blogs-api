const userServiceCreate = require('../services/UserService');

const createController = async (req, res, next) => {
  try {
    console.log(req.body);
    const user = await userServiceCreate.ServiceCreate(req.body);
    console.log(user);

    if (user.message) return res.status(409).json({ message: user.message });

    return res.status(201).json(user);
  } catch (err) {
    console.log('aqui');
    next(err);
  }
};

module.exports = {
  createController,
};