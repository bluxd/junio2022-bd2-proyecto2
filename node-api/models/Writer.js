const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Writer', {
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
    tableName: 'Writer',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Writer__40573C1C7D5DFBF6",
        unique: true,
        fields: [
          { name: "nameId" },
          { name: "titleId" },
        ]
      },
    ]
  });
};
