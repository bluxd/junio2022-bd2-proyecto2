const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Principal', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nameId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Name',
        key: 'id'
      }
    },
    titleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Title',
        key: 'id'
      }
    },
    jobId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    character: {
      type: DataTypes.STRING(500),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Principal',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Principa__3213E83FD06A0AFF",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
