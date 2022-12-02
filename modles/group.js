const sequelize=require('../util/database')
const Sequelize=require('sequelize')

const Group=sequelize.define('group',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false

    },
    groupname:{
        type:Sequelize.STRING,
        allowNull:false

    },
    createdby:{
        type:Sequelize.STRING,
    }

    
})
module.exports=Group