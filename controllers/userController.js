const UserService = require('../services/UserService');

const getAllUsers = async (_req, res, next) => {
  try {
    const result = await UserService.getAll();
  
    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

const getByUserId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await UserService.getById(id);
    
    if (user.notExist) return res.status(404).json({ message: user.notExist });
    
    return res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const createUser = async (req, res, next) => {
  try {
    const user = await UserService.create(req.body);

    if (user.alreadyExist) return res.status(409).json({ message: user.alreadyExist });

    return res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.user;

   await UserService.excludeUser(id);
    return res.status(204).end();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getByUserId,
  deleteUser,
};