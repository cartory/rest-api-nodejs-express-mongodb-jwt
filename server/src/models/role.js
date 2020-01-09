//  REQUIRES
const { Schema, model } = require('mongoose');
const table = 'Role';

//  ROLE
const roleSchema = new Schema({
    name: String,
    description: String,  
    level: Number
},{
    versionKey: false
});

module.exports = model(table, roleSchema);