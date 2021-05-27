var DataTypes = require("sequelize").DataTypes;
var _conn_test = require("./conn_test");

function initModels(sequelize) {
  var conn_test = _conn_test(sequelize, DataTypes);


  return {
    conn_test,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
