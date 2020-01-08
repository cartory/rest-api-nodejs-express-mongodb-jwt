//  REQUIRES
const mongoose = require('mongoose');

//  DB CONNECCTION
module.exports = {
    connect: async () => {
        try {
            const db = await mongoose.connect('mongodb://localhost/database', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            console.log("Database is connected");    
            // WE CAN SEE MONGODB CONFIG WITH NEXT LOG
            // console.log(db);
        } catch (error) {
            console.log(error);
        }
    }
}