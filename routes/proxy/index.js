var express = require('express');
const { sequelize } = require('../../db');
const { models } = require("../../db/models");
var router = express.Router();

router.get('/', async (req, res, next) => {
    // try {
    //     var queryStyle = await sequelize.query(`
    //         SELECT TO_CHAR(NOW(),'YYYY-MM-DD HH:mm:ss') AS now
    //     `)

    //     await models.conn_test.create({
    //         app_nm: process.env.APP_NAME
    //     })


    //     return res.json(`Backend API DB connect success. (${queryStyle[0][0].now})`);
    // } catch (e) {
    //     console.log("Backend API DB connect failed.");
    //     return res.json(`Backend API (DB ERROR)`);
    // }
    return res.json(`Backend API Call Success!`);
});

module.exports = router;
