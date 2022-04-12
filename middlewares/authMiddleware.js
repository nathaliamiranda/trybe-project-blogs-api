const jwtGenerator = require('../helpers/jwtGenerator');

const { User } = require('../models');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
  
    if (!token) return res.status(401).json({ message: 'Token not found' });

    const decoded = jwtGenerator.verifyJwt(token);
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
