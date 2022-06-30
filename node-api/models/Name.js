const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Name', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    primaryName: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    birthYear: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    deathYear: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Name',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Name__3213E83F6E5D83F9",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
