//  REQUIRES
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const Role = require('../models/role');
const jwt = require('jsonwebtoken');
const secret = 'cari';

//  METHODS
module.exports = {

    all: async (req, res) => {
        var users = await User.find({}, {password: false});
        res.status(200).json(users);
    },

    find: async (req, res) => {
        var user = await User.findById(req.params.id, {password:false});
        res.status(200).json(user);
    },

    register: async (req, res) => {
        var { username, email, password } = req.body;
        // var role_id = Role.find({level: 1}, {_id:true});
        var password = await bcrypt.hash(password, 10);
        var user = await User.create({ username, email, password, role_id});
        var token = jwt.sign({id: user._id}, secret, {expiresIn: 60*60});
        res.json({auth: true, token});
    },

    login: (req, res) => {
        var token = jwt.sign({id: req.user_id}, secret, {expiresIn: 60*60});
        res.status(200).json({auth:true, token});
    },

    profile: async (req, res) => {
        var user = await User.findById(req.user_id, {password: false});
        if (!user) 
            return res.status(404).json({message: "User not found"});
        res.status(200).json(user);
    }
};