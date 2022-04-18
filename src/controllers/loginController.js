const loginServiceCreate = require('../services/LoginService');
const jwtGenerator = require('../helpers/jwtGenerator');

const createLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        
        const user = await loginServiceCreate.createLogin(email, password);

        if (user.invalidFields) return res.status(400).json({ message: user.invalidFields });

        const token = jwtGenerator.singJwt({ email: user.email, id: user.id });

        return res.status(200).json({ token });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createLogin,
};
