'use strict';
module.exports = (sequelize, DataTypes) => {
  const albums = sequelize.define('albums', {
    albumName: DataTypes.STRING,
    albumYear: DataTypes.INTEGER,
    artistID: DataTypes.INTEGER
  }, {});
  albums.associate = function(models) {
    // associations can be defined here
  };
  return albums;
};