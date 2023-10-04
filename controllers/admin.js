
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const admin = require('/Users/olfabendhaou/Desktop/dashbord/Model/admin.js');

exports.login = async(req,res) => {  
    try{
        const {username, password} = req.body ;
        const foundAdmin = await admin.findOne({username});

        if (!foundAdmin){
            return  res.status(400).send({ errors : [{ msg : "Admin NOT FOUND!!!"}]});
        }

        if (password!== foundAdmin.password) {
            return  res.status(400).send({ errors : [{ msg : "admin or password incorrect"}]});
        }
        const token = jwt.sign({
            id: foundAdmin._id
        }, process.env.SCRT_KEY, {expiresIn : "1h"});

        res.status(200).send({ success : [{ msg : "welcom back"}], token, admin:foundAdmin});
    }
    catch (error){
        res.status(400).send({ errors : [{ msg : "oooops!check your informations!"}]});   
    }
}
exports.updatePassword = async (req,res) => {

    const {oldPassword,newPassword, confirmnewPassword} = req.body;
    const {_id} = req.params;
    try{
        //get admin
        const admin= await admin.findById(req.params);
        if (!admin){
            return res.status(400).send('Admin not found')
        }

        //validate  old pasaword
        const isValidPassword = await bcrypt.compare(oldPassword, admin.password);
        if (!isValidPassword){
            return res.status(400).send({errors : [{msg : "veuillez vérifier votre mot de passe"}]})
        }
        if (newPassword !== confirmnewPassword)
        { 
            return res.status(400).send({errors : [{msg : "veuillez vérifier votre nouveau mot de passe"}]})
        }
        // // hash new password 
        // const hashepassword = await bcrypt.hash(password, 10);

        // update user's password
        admin.password = newPassword;

        const updatePassword = await admin.save();
        return res.json({success :[{msg : "votre mot de passe a été modifié avec succès"}], admin :updatePassword});
    }
    catch(err){
    res.status(400).send({ errors : [{ msg : "veuillez essayer ultérieurementation"}]});
    }
}