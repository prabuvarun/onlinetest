"use strict";

var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  var Comment = sequelize.define("Comment", {
    name: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true
        }
    },
    body: Sequelize.STRING
  },
  {
    classMethods: {
        associate: function (models) {
            Comment.belongsTo(models.Post);
        }
    }

});
  return Comment;
};