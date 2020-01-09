//  REQUIRES
const mongoose = require('mongoose');
const uri = 'mongodb://localhost/database';

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