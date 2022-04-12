const jwt = require('jsonwebtoken');

const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
};

const SECRET = process.env.JWT_SECRET;

module.exports = {
   singJwt: (payload = {}) => jwt.sign({ data: payload }, SECRET, jwtConfig),
   
};