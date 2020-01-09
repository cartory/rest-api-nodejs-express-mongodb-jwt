//  REQUIRE
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const secret = 'cari';

//  METHODS
module.exports = {
    verifyToken: (req, res, next) => {   
        var token = req.headers['x-access-token'];
        if (!token)
            return res.status(401).json({auth: false, message: "Not authorized"});
        var decoded = jwt.verify(token, secret);
        req.user_id = decoded.id;
        next();    
    },

    verifyLogin: async (req, res, next) => {
        var { email, password } = req.body;
        var user = await User.findOne({ email: email });
        if (!user)
            return res.status(404).json({message: "Email not found"});
        if (!await user.validatePassword(password))
            return res.status(401).json({auth: false, token: null});
        req.user_id = user._id;
        next();   
    }
}