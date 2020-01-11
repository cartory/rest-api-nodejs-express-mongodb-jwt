//  REQUIRES
const apiRoutes = require('./src/routes/api.routes');
const database = require('./config/database.config');
const express = require('express');
const morgan = require('morgan');

//  INIT
const app = express();
const PORT = process.env.PORT;

//  USES AND CONNECTION 
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan('dev'));
database.connect();

// ROUTES
app.use('/api/', apiRoutes);

//  SERVER
async function init(){
    await app.listen(PORT);
    console.log("Server on port", PORT);
    console.log(new Date());
}

init();