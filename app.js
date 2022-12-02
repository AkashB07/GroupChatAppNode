const express = require('express');
const  cors = require('cors');

const dotnev = require('dotenv');
dotnev.config();

const sequelize=require('./util/database');

const app = express();

//models
const User=require('./modles/user');
const Message=require('./modles/messages');
const Group = require('./modles/group');
const UserGroup = require('./modles/userGroup');

//routes
const userRoutes=require('./routes/user');
const messageRoute=require('./routes/message')
const groupRoute=require('./routes/group')
const adminRoute=require('./routes/admin')

app.use(cors());
app.use(express.json());

app.use('/user', userRoutes);
app.use('/message', messageRoute);
app.use('/group', groupRoute);
app.use('/admin', adminRoute);

User.hasMany(Message);
Message.belongsTo(User);

Group.hasMany(Message);
Message.belongsTo(Group);

User.hasMany(UserGroup);
UserGroup.belongsTo(User);

Group.hasMany(UserGroup);
UserGroup.belongsTo(Group);

// User.belongsToMany(Group, { through: UserGroup });
// Group.belongsToMany(User, { through: UserGroup });



// sequelize.sync({force:true})
sequelize.sync()
.then(()=>{
    app.listen(3000);
})
.catch(err=>{
    console.log(err)})