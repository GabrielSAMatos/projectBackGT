const { Sequelize } = require("sequelize");

const connection = new Sequelize({
    dialect: 'mysql',
    database: "pbgt", // projeto backend geracao tech
    host: "localhost",
    username: "root",
    password: "root",
    port: 3306
});

connection.sync();

module.exports = connection;