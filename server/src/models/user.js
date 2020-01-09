//  REQUIRES
const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const table = "User";

//  USER
const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
},
{
    timestamps: true,
    versionKey: false
});

userSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

userSchema.methods.validatePassword = function(password) {
    return bcrypt.compare(password, this.password);
}

module.exports = model(table, userSchema);