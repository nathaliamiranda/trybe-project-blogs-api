const userServiceCreate = require('../services/UserService');

const createController = async (req, res, next) => {
  try {
    const user = await userServiceCreate.ServiceCreate(req.body);

    if (user.message) return res.status(409).json({ message: user.message });

    return res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createController,
};