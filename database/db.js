const Sequelize = require("sequelize")
const db = {}
const sequelize = new Sequelize("database2", "root", "Amin4012!", {
    host: "bluecrew.cq5crrozg6px.us-east-2.rds.amazonaws.com",
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.sequelize = sequelize
db.sequelize = sequelize

module.exports = db