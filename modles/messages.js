const sequelize=require('../util/database')
const Sequelize=require('sequelize')

const Message=sequelize.define('message',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false

    },
    username:{
        type:Sequelize.STRING,
    },
    msg:{
        type:Sequelize.STRING,

    }
})
module.exports=Message