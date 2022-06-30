const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Director', {
    nameId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Name',
        key: 'id'
      }
    },
    titleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Title',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Director',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Director__40573C1CEC8B51DA",
        unique: true,
        fields: [
          { name: "nameId" },
          { name: "titleId" },
        ]
      },
    ]
  });
};
