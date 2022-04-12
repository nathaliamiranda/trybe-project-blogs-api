const loginServiceCreate = require('../services/LoginService');
const jwtGenerator = require('../helpers/jwtGenerator');

const createLoginController = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        
        const user = await loginServiceCreate.createLogin(email, password);
        console.log(user);

        if (user.message) return res.status(400).json({ message: user.message });

        const token = jwtGenerator.singJwt(user.email);

        return res.status(200).json({ token });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createLoginController,
};
