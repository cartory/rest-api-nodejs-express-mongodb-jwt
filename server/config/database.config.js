//  REQUIRES
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//  INIT
dotenv.config();

//  SETTING .ENV
const uri =
    process.env.MONGO_USERNAME || process.env.MONGO_PASSWORD?
    // THEN
    `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOSTNAME}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`:
    //  ELSE
    `mongodb://${process.env.MONGO_HOSTNAME}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`;
    // console.log(typeof(uri), uri);}

//  DB CONNECCTION
module.exports = {
    connect: async () => {
        try {
            const db = await mongoose.connect(
                uri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false
            });
            console.log("Database is connected");    
            // WE CAN SEE MONGODB CONFIG WITH NEXT LOG
            // console.log(db);
        } catch (error) {
            console.log(error);
        }
    }
}