const { DataTypes, Sequelize } = require('sequelize')

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
  sequelize.define('song', {
    // The following specification of the 'id' attribute could be omitted
    // since it is the default.
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING
    },
    disk: {
      type: DataTypes.INTEGER
    },
    artist: {
      type: DataTypes.STRING
    },
    album: {
      type: DataTypes.STRING
    },
    codec: {
      type: DataTypes.STRING
    },
    sampleRate: {
      type: DataTypes.INTEGER
    },
    bitsPerSample: {
      type: DataTypes.INTEGER
    },
    track: {
      type: DataTypes.INTEGER
    },
    year: {
      type: DataTypes.INTEGER
    },
    label: {
      type: DataTypes.ARRAY(Sequelize.TEXT)
    },
    musicBrainzRecordingId: {
      allowNull: true,
      type: DataTypes.STRING
    },
    musicBrainzArtistId: {
      allowNull: true,
      type: DataTypes.ARRAY(Sequelize.TEXT)
    },
    musicBrainzTrackId: {
      allowNull: true,
      type: DataTypes.STRING
    }
  })
}