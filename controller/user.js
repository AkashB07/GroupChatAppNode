const User = require('../modles/user');
const bcrypt = require('bcrypt');

function isstringinvalid(string){
    if(string == undefined || string.length === 0){
        return true;
    }
    else{
        return false;
    }
}

const signup = async (req, res) => {
    try 
    {
        const{name, email, phonenumber, password} = req.body;
        // console.log(name)

        if(isstringinvalid(name) || isstringinvalid(email) || isstringinvalid(phonenumber) || isstringinvalid(password)){
            return res.status(400).json({err: "Bad parameters. Something is missing"});
        }

        const result = await User.findAll({ where: { email } })
          if (result.length > 0) {
            return res.json({ message: "User already exists, Please Login" });
          }

        const saltrounds = 10;
        bcrypt.hash(password, saltrounds, async(err, hash) => {
            await User.create({name, email, phonenumber, password: hash});
            // console.log(name)
            return res.status(201).json({message: 'Successfully created new user', succes:true});
        })
    } 
    catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    signup
}