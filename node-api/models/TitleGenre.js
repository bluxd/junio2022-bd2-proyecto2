const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TitleGenre', {
    titleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Title',
        key: 'id'
      }
    },
    genreId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Genre',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'TitleGenre',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__TitleGen__7EB791E2093E89A0",
        unique: true,
        fields: [
          { name: "titleId" },
          { name: "genreId" },
        ]
      },
    ]
  });
};
