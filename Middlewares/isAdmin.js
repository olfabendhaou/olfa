const admin = require('/Users/olfabendhaou/Desktop/dashbord/Model/admin.js')
const jwt = require('jsonwebtoken')



module.exports = isAdmin = async (req, res,next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(400).send({errors: [{msg :"Not Authorized 1"}]});
        }
        const decoded = jwt.verify(token, process.env.SCRT_KEY);
        const foundadmin = await admin.findOne({_id : decoded.id});
        if (!foundadmin) {
            return res.status(400).send({errors: [{msg :"Not Authorized 2"}]});
        } 
        req.admin= foundadmin;
        next()
    }
    catch (error) {
        res.status(400).send({ errors : [{ msg : "Not Authorized3"}]});
    }
}