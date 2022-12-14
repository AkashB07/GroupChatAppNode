const Group = require('../modles/group');
const userGroup = require('../modles/userGroup');
const User = require('../modles/user');

function isvalid(string){
    if(string == undefined || string.length === 0){
        return true;
    }
    else{
        return false;
    }
}

const createGroup = async (req,res)=>{
    try {
        const {groupname} = req.body;
        // console.log(groupname);
        if(isvalid(groupname)){
            return res.status(400).json({succese: false, message: "Please enter the name"});
        }
        const group = await Group.create({groupname:groupname, createdby:req.user.name});
        const respone = await userGroup.create({isadmin:true, groupId:group.id, userId:req.user.id});
        return res.status(201).json({message:'Group Created',success:true})
    } 
    catch (error) {
        res.status(500).json({message: error, success: false});
    }
}

const getGroups = async (req, res) => {
    try {
        const respone = await userGroup.findAll({where:{userId:req.user.id,}, include: [
            {
              model: Group
            }
          ]});
        // console.log(respone);
        res.status(200).json({data:respone,success:true})
    } 
    catch (error) {
        res.status(500).json({message: error, success: false});
    }
}

const getMembers = async (req, res) => {
    try {
        const groupId = req.params.id;
        // console.log(req.params.id);
        const respone = await userGroup.findAll({where:{groupId:groupId}, include: [
            {
              model: User
            }
          ]});
          res.status(200).json({data:respone, success:true, user:req.user})
    } 
    catch (error) {
        res.status(500).json({message: error, success: false});
    }
}

const getAllUsers = async (req, res) => {
    try {
        const response = await User.findAll();
        res.status(200).json({data: response, success: true})
    } 
    catch (error) {
        res.status(500).json({message: err, success: false});
    }
}


module.exports = {
    createGroup,
    getGroups,
    getMembers,
    getAllUsers
}