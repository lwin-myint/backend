const Sequelize = require("sequelize")
const sequelize = require("../utils/database")

const Post = sequelize.define("post",{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    description:{
        type:Sequelize.TEXT,
        allowNull:false
    },
    image_url:{
        type:Sequelize.TEXT,
        allowNull:false
    }
})

module.exports = Post