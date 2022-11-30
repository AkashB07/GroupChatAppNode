const Message=require('../modles/messages')

const addMeassage= async (req,res) => {
    try {
        const msg=req.body.msg;
        const userId = req.user.id
        // console.log(msg);
        // console.log(req.user.name);
        await Message.create({ username:req.user.name, msg:msg, userId:userId })
        res.status(200).json("message added")
    } 
    catch (error) {
        res.status(500).json({message: error, success: false});
    }
}

const getMeassage = async(req,res) => {
    try {
        const response = await Message.findAll();
        // console.log(response);
        res.status(200).json({data: response, success: true})
    } 
    catch (error) {
        res.status(500).json({message: error, success: false});
    }

}

module.exports = {
    addMeassage,
    getMeassage
}