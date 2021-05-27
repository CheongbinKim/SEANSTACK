const Sequelize = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const DATABASE = process.env.DB_DATABASE;
const HOST = process.env.DB_HOST;
const USERNAME = process.env.DB_USER_NAME;
const PASSWORD = process.env.DB_PASSWORD;
const SCHEMANAME = process.env.DB_SCHEMA_NAME;

const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
    host: HOST,
    dialect: "postgres",
    timezone: "+09:00",
    define: {
        schema: SCHEMANAME,
        paranoid: true, // softdelete 기능 활성
    },
    logging: false,
    omitNull: true,
    pool: {
        max: 40,
        min: 0,
        idle: 1000 * 60 * 60 * 24 * 365,
    }
});

sequelize.authenticate().then(function(err) {
        console.info('[DB Connect - sequelize.authenticate()][Success]');
        console.info("HOST:",HOST);
        console.info("DB명:",DATABASE);
        console.info("사용자명:",USERNAME);
        console.info("비밀번호:");
    }).catch(function (err) {
        console.info("HOST:",HOST);
        console.info("DB명:",DATABASE);
        console.info("사용자명:",USERNAME);
        console.info("비밀번호:");
        console.info('[DB Connect - sequelize.authenticate()][Failed]', err);
});

module.exports = { sequelize, SCHEMANAME };