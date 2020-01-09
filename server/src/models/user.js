//  REQUIRES
const { Schema, model } = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const bcrypt = require('bcryptjs');
const table = 'User';

//  USER
const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    role_id: ObjectId
},
{
    timestamps: true,
    versionKey: false
});

userSchema.methods.validatePassword = function(password) {
    return bcrypt.compare(password, this.password);
}

module.exports = model(table, userSchema);