const Sequelize = require("sequelize");

require("dotenv").config();
const { DB_HOST } = process.env;

const sequelize = new Sequelize(DB_HOST, null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;
