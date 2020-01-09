//  REQUIRE
const jwt = require('jsonwebtoken');

//  METHODS
module.exports = {
    verifyToken: (req, res, next) => {   
        var token = req.headers['x-access-token'];
        if (!token){
            res.status(401).json({auth: false, message: "Not authorized"});
        }else{
            var decoded = jwt.verify(token, 'cari');
            req.user_id = decoded.id;
            next();
        }              
    }
}