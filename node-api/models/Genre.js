const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Genre', {
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
    tableName: 'Genre',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Genre__3213E83FFA084C63",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
