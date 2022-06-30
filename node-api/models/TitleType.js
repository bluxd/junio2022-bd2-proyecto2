const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TitleType', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(500),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TitleType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__TitleTyp__3213E83FA450D294",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
