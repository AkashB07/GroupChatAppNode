const express = require('express');
const  cors = require('cors');

const dotnev = require('dotenv');
dotnev.config();

const sequelize=require('./util/database');

const app = express();

//models
const User=require('./modles/user')

//routes
const userRoutes=require('./routes/user')

app.use(cors());
app.use(express.json());

app.use('/user', userRoutes)


// sequelize.sync({force:true})
sequelize.sync()
.then(()=>{
    app.listen(3000);
})
.catch(err=>{
    console.log(err)})