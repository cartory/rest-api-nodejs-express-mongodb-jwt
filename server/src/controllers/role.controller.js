//  REQUIRES
const Role = require('../models/role');

//  METHOJS
module.exports = {
    all: async (req, res) => {
        var roles = await Role.find();
        res.status(200).json(roles);      
    },

    find: async (req, res) => {
        var role = await Role.findById(req.params.id);
        res.status(200).json(role);
    },

    store: async (req, res) => {
        var { name, description, level } = req.body;
        var role = await Role.create({name, description, level});
        res.status(200).json(role);
    },

    update: async (req, res) => {
        var { name, description, level } = req.body;
        var result = await Role.updateOne({_id: req.params.id}, {name, description, level});
        res.status(200).json(result);        
    },

    destroy: async (req, res) => {
        var result = await Role.remove({_id: req.params.id});
        res.status(200).json(result);        
    },
};