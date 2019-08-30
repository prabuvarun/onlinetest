"use strict";

var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: Sequelize.STRING,
    username: { type: Sequelize.STRING, unique: true },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    },
    address : {
        type: Sequelize.JSON,
    },
    phone: Sequelize.STRING,
    website: Sequelize.STRING,
    company : {
        type: Sequelize.JSON,
    }
  },
  {
    classMethods: {
        associate: function (models) {
            User.hasMany(models.Post);
        }
    }

}
  );

  return User;
};