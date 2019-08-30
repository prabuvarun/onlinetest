"use strict";

var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: Sequelize.STRING,
    body: Sequelize.STRING
   
  },
  {
    classMethods: {
        associate: function (models) {
            Post.belongsTo(models.User);
            Post.hasMany(models.Comment);
        }
    }

});

  return Post;
};