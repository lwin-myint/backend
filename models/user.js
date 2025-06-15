const Sequelize = require("sequelize")
const sequlize = require("../utils/database")

const user = sequlize.define("user",{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    name:Sequelize.STRING,
    email:Sequelize.STRING
})

module.exports = user
