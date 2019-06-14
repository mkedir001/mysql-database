const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'kittens',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        birthdate: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        breed: {
            type: Sequelize.STRING
        },
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        weight: {
            type: Sequelize.INTEGER
        },
        imgUrl: {
            type: Sequelize.STRING
        },
        dateCreated: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        lastSeen: {
            type: Sequelize.STRING
        },
    },
    {
        timestamps: false
    }
)