'use strict';
module.exports = (sequelize, DataTypes) => {
  const artist = sequelize.define('artist', {
    artistName: DataTypes.STRING
  }, {});
  artist.associate = function(models) {
    // associations can be defined here
  };
  return artist;
};