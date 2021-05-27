var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var { sequelize } = require("../index");
var basename = path.basename(__filename);
var models = {};

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    //var model = sequelize["import"](path.join(__dirname, file));
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)

    if (model) {
      models[model.name] = model;
    }
  });

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
module.exports = { models };