const jwt = require('jsonwebtoken');
const User = require('../modles/user');

const authenticate = async (req, res, next) => {
    try {
        const token = req.header('Authorization');
        const user = jwt.verify(token, 'securityKey522wsrhrrh5fa2fddrsh');
        const users = await User.findByPk(user.userId)
        req.user = users;
        next();
    } 
    catch (err) {
        return res.status(401).json({success: false})
    }
}

module.exports = {
    authenticate
}