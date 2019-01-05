'use strict';
module.exports = (sequelize, DataTypes) => {
  const tracks = sequelize.define('tracks', {
    trackName: DataTypes.STRING,
    albumID: DataTypes.INTEGER,
    trackDuration: DataTypes.INTEGER
  }, {});
  tracks.associate = function(models) {
    // associations can be defined here
  };
  return tracks;
};