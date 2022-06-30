const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('KnowForTitle', {
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
    tableName: 'KnowForTitle',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__KnowForT__40573C1C1806E3AE",
        unique: true,
        fields: [
          { name: "nameId" },
          { name: "titleId" },
        ]
      },
    ]
  });
};
