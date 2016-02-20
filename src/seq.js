var Sequelize = require('sequelize');
var mysql = require('mysql');

config = require("./db");
db = config.database;

var sequelize = new Sequelize(db.name, db.user, db.password, {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

exports.sequelize = sequelize;
exports.Sequelize = Sequelize;