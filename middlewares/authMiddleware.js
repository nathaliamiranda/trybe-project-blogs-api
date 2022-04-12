const jwt = require('jsonwebtoken');

const { User } = require('../models');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
  
    if (!token) return res.status(401).json({ error: 'Token not found' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findOne({
      where: { email: decoded.data },
    });

    if (!user) return res.status(401).json({ message: 'Expired or invalid token' });

    req.user = user;

    next();
  } catch (error) {
if (error.name.includes('Token')) {
  return res.status(401).json({ message: 'Expired or invalid token' });
}
next(error);
  }
};
