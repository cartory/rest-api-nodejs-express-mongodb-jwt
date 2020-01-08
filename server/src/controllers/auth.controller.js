//  REQUIRES
const User = require('../models/user');
const jwt = require('jsonwebtoken');

//  MIDDLEWARES
const auth = require('../middleware/auth.middleware');

//  METHODS
module.exports = {
    register: async (req, res, next) => {
        var { username, email, password } = req.body;
        user = new User({
            username,
            email,
            password
        });
        user.password = await user.encryptPassword(user.password);
        await user.save();
        token = jwt.sign({id: user._id}, 'cari', { expiresIn: 60*60});
        res.json({auth: true, token});
    },

    login: async (req, res, next) => {
        var { email, password } = req.body;
        var user = await User.findOne({ email: email });
        if (!user){
            res.status(404).json({message: "Email not found"});
        }else if (!await user.validatePassword(password)){
            res.status(401).json({auth: false, token: null});
        }else{
            var token = jwt.sign({id: user._id}, 'cari', {expiresIn: 60*60});
            res.status(200).json({auth:true, token});
        }
    },

    profile: async (req, res, next) => {
        var user = await User.findById(req.user_id, { password: false});
        if (!user) {
            res.status(404).json({message: "User not found"});
        }
        res.status(200).json(user);
    }
};