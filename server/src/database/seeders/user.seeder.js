//  REQUIRES
const User = require('../../models/user');
const Role = require('../../models/role');
const faker = require('faker');

//  USER SEEDER
module.exports = {
    
    seed: () => {
        console.warn("seed");
    },

    make: (quantity) =>{
        console.warn("make", quantity);
    }
}