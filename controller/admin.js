const Group = require('../modles/group');
const userGroup = require('../modles/userGroup');
const User = require('../modles/user');

function isstringinvalid(string){
    if(string == undefined || string.length === 0){
        return true;
    }
    else{
        return false;
    }
}


const addMember = async (req, res) => {
    try {
        const groupId = req.params.id;
        // console.log(req);
        const email = req.body.email;
        if(isstringinvalid(email)){
            return res.status(400).json({err: "Bad parameters."});
        }
        const user = await  User.findOne({ where: { email: email } });
        const respone = await userGroup.findOne({ where: { userId: user.id }});
        if(respone){
            return res.status(201).json({ message: "User already exists", success: true });
        }
        else{
            await userGroup.create({ isadmin: false, userId: user.id, groupId: groupId});
            res.status(201).json({ message: "User added to the group", success: true });
        }
    } 
    catch (error) {
        res.status(500).json({message: error, success: false});
    }
}

const removeMember = async (req, res) => {
    try {
        const groupId = req.params.id;
        const userId = req.body.userid;
        await userGroup.destroy({ where: { userId: userId, groupId: groupId } });
        res.status(200).json({ message: "User Removed", success: true });
    } 
    catch (error) {
        res.status(500).json({message: error, success: false}); 
    }
}

const makeAdmin = async (req, res) => {
    try {
        const groupId = req.params.id;
        const userId = req.body.userid;
        await userGroup.update({ isadmin: true }, { where: { userId: userId, groupId: groupId } });
        res.status(200).json({ message: "Succesfully made as an Admin", success: true });
    } 
    catch (error) {
        res.status(500).json({message: error, success: false}); 
    }
}

const removeAdmin = async (req, res) => {
    try {
        const groupId = req.params.id;
        const userId = req.body.userid;
        await userGroup.update({ isadmin: false }, { where: { userId: userId, groupId: groupId } });
        res.status(200).json({ message: "Successfully removed as Admin", success: true });
    } 
    catch (error) {
        res.status(500).json({message: error, success: false}); 
    }
}


module.exports = {
   addMember,
   removeMember,
   makeAdmin,
   removeAdmin
}