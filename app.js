const express = require('express');
const  cors = require('cors');

const dotnev = require('dotenv');
dotnev.config();

const sequelize=require('./util/database');

const app = express();

//models
const User=require('./modles/user');
const Message=require('./modles/messages')

//routes
const userRoutes=require('./routes/user')
const messageRoute=require('./routes/message')

app.use(cors());
app.use(express.json());

app.use('/user', userRoutes)
app.use('/message', messageRoute);

User.hasMany(Message)
Message.belongsTo(User);


// sequelize.sync({force:true})
sequelize.sync()
.then(()=>{
    app.listen(3000);
})
.catch(err=>{
    console.log(err)})