const  express = require('express');
const router = express.Router();
const {login,updatePassword} = require ('../controllers/admin.js')
const isAdmin = require('../Middlewares/isAdmin')
const { validation } = require('../Middlewares/Validator');
router.post("/login", validation, login);
router.get("/current" , isAdmin , (req,res)=>
{res.send(req.admin)});
router.put("/updatePassword/:_id", isAdmin , updatePassword);
module.exports = router