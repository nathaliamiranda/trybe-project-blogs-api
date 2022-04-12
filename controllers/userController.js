const userService = require('../services/UserService');

const getAllController = async (_req, res, next) => {
  try {
    const result = await userService.getAll();
  
    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const getByIdController = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await userService.getById(id);
    
    if (!user) return res.status(404).json({ message: 'User does not exist' });
  
    return res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const createController = async (req, res, next) => {
  try {
    const user = await userService.ServiceCreate(req.body);

    if (user.message) return res.status(409).json({ message: user.message });

    return res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createController,
  getAllController,
  getByIdController,
};