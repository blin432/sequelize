'use strict';
module.exports = (sequelize, DataTypes) => {
  const tracks = sequelize.define('tracks', {
    trackName: DataTypes.STRING,
    albumID: DataTypes.INTEGER,
    trackDuration: DataTypes.INTEGER
  }, {});
  tracks.associate = function(models) {
    // associations can be defined 
    tracks.belongsTo(models.albums);
  };
  return tracks;
};