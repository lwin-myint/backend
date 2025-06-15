const Sequelize = require("sequelize");
const sequlize = new Sequelize("blog","root","root",{
    host:'localhost',
    dialect:'mysql'
})

module.exports = sequlize;