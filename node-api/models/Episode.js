const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Episode', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    titleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Title',
        key: 'id'
      }
    },
    parentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Episode',
        key: 'id'
      }
    },
    season: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    episode: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Episode',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Episode__3213E83FEBC0B4E5",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
