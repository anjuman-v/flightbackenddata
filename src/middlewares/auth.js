const jwt = require('jsonwebtoken');

const verifyToken = (token) => {
     
    return new Promise((response, reject ) => {
        jwt.verify(token, "AJAY", function (err, result) {
            if(err) 
                reject(err)
            response(result.user)
        })
    })
}

const auth = async(req, res, next) => {
    if(!req.headers.authorization)
        return res.status(402).send({status : "failed"})
    if(!req.headers.authorization.startsWith('Bearer'))
        return res.status(402).send({status : "failed"})
    
    
    const token = req.headers.authorization.split(' ')[1]
    let user;
    try{
        user = await verifyToken(token)
    } catch (error) {
        return res.status.send({ status : "failed" })
    }
    req.body.user = user
    next()
}

module.exports = {auth}