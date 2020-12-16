const jwt = require('jsonwebtoken')

exports.verifyUserToken = async (req, res, next) => {
    let token = req.headers.authorization;
    if (!token) return res.status(401).send('Access Denied');
    try {
        token = token.split(' ')[1]; // Removing bearer word from token
        if (token === null || !token) return res.status(401).send('Unauthorized request');
        let verifiedUser = jwt.verify(token, process.env.TOKEN_SECRET);
        if (!verifiedUser) return res.status(401).send('Unauthorized request');
        req.user = verifiedUser;
        return next();
    } catch (error) {
        res.status(400).send('Invalid token' + error.message);
    }
}

exports.isUser = async (req, res, next) => {
    if (req.user.user_type_id === 0) {
        return next();
    }
    return res.status(401).send('Unauthorized!');
}

exports.isAdmin = async (req, res, next) => {
    if (req.user.user_type_id === 1) {
        return next();
    }
    return res.status(401).send('Unauthorized!');
}