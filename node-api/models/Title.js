const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Title', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    titleTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'TitleType',
        key: 'id'
      }
    },
    imdbId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    primaryTitle: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    originalTitle: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    isAdult: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    startYear: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    endyear: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    runtime: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Title',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Title__3213E83F210B917C",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
