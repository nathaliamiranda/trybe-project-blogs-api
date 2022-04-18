const jwtGenerator = require('../helpers/jwtGenerator');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
  
    if (!token) return res.status(401).json({ message: 'Token not found' });

    const decoded = jwtGenerator.verifyJwt(token);
   
    if (!decoded.data) return res.status(401).json({ message: 'Expired or invalid token' });
    
    req.user = decoded.data;

    next();
  } catch (error) {
if (error.name.includes('Token')) {
  return res.status(401).json({ message: 'Expired or invalid token' });
}
next(error);
  }
};
