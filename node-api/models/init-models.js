var DataTypes = require("sequelize").DataTypes;
var _Director = require("./Director");
var _Episode = require("./Episode");
var _Genre = require("./Genre");
var _KnowForTitle = require("./KnowForTitle");
var _Name = require("./Name");
var _Principal = require("./Principal");
var _Title = require("./Title");
var _TitleGenre = require("./TitleGenre");
var _TitleType = require("./TitleType");
var _Writer = require("./Writer");

function initModels(sequelize) {
  var Director = _Director(sequelize, DataTypes);
  var Episode = _Episode(sequelize, DataTypes);
  var Genre = _Genre(sequelize, DataTypes);
  var KnowForTitle = _KnowForTitle(sequelize, DataTypes);
  var Name = _Name(sequelize, DataTypes);
  var Principal = _Principal(sequelize, DataTypes);
  var Title = _Title(sequelize, DataTypes);
  var TitleGenre = _TitleGenre(sequelize, DataTypes);
  var TitleType = _TitleType(sequelize, DataTypes);
  var Writer = _Writer(sequelize, DataTypes);

  Genre.belongsToMany(Title, { as: 'titleId_Title_TitleGenres', through: TitleGenre, foreignKey: "genreId", otherKey: "titleId" });
  Name.belongsToMany(Title, { as: 'titleId_Titles', through: Director, foreignKey: "nameId", otherKey: "titleId" });
  Name.belongsToMany(Title, { as: 'titleId_Title_KnowForTitles', through: KnowForTitle, foreignKey: "nameId", otherKey: "titleId" });
  Name.belongsToMany(Title, { as: 'titleId_Title_Writers', through: Writer, foreignKey: "nameId", otherKey: "titleId" });
  Title.belongsToMany(Genre, { as: 'genreId_Genres', through: TitleGenre, foreignKey: "titleId", otherKey: "genreId" });
  Title.belongsToMany(Name, { as: 'nameId_Names', through: Director, foreignKey: "titleId", otherKey: "nameId" });
  Title.belongsToMany(Name, { as: 'nameId_Name_KnowForTitles', through: KnowForTitle, foreignKey: "titleId", otherKey: "nameId" });
  Title.belongsToMany(Name, { as: 'nameId_Name_Writers', through: Writer, foreignKey: "titleId", otherKey: "nameId" });
  Episode.belongsTo(Episode, { as: "parent", foreignKey: "parentId"});
  Episode.hasMany(Episode, { as: "Episodes", foreignKey: "parentId"});
  TitleGenre.belongsTo(Genre, { as: "genre", foreignKey: "genreId"});
  Genre.hasMany(TitleGenre, { as: "TitleGenres", foreignKey: "genreId"});
  Director.belongsTo(Name, { as: "name", foreignKey: "nameId"});
  Name.hasMany(Director, { as: "Directors", foreignKey: "nameId"});
  KnowForTitle.belongsTo(Name, { as: "name", foreignKey: "nameId"});
  Name.hasMany(KnowForTitle, { as: "KnowForTitles", foreignKey: "nameId"});
  Principal.belongsTo(Name, { as: "name", foreignKey: "nameId"});
  Name.hasMany(Principal, { as: "Principals", foreignKey: "nameId"});
  Writer.belongsTo(Name, { as: "name", foreignKey: "nameId"});
  Name.hasMany(Writer, { as: "Writers", foreignKey: "nameId"});
  Director.belongsTo(Title, { as: "title", foreignKey: "titleId"});
  Title.hasMany(Director, { as: "Directors", foreignKey: "titleId"});
  Episode.belongsTo(Title, { as: "title", foreignKey: "titleId"});
  Title.hasMany(Episode, { as: "Episodes", foreignKey: "titleId"});
  KnowForTitle.belongsTo(Title, { as: "title", foreignKey: "titleId"});
  Title.hasMany(KnowForTitle, { as: "KnowForTitles", foreignKey: "titleId"});
  Principal.belongsTo(Title, { as: "title", foreignKey: "titleId"});
  Title.hasMany(Principal, { as: "Principals", foreignKey: "titleId"});
  TitleGenre.belongsTo(Title, { as: "title", foreignKey: "titleId"});
  Title.hasMany(TitleGenre, { as: "TitleGenres", foreignKey: "titleId"});
  Writer.belongsTo(Title, { as: "title", foreignKey: "titleId"});
  Title.hasMany(Writer, { as: "Writers", foreignKey: "titleId"});
  Title.belongsTo(TitleType, { as: "titleType", foreignKey: "titleTypeId"});
  TitleType.hasMany(Title, { as: "Titles", foreignKey: "titleTypeId"});

  return {
    Director,
    Episode,
    Genre,
    KnowForTitle,
    Name,
    Principal,
    Title,
    TitleGenre,
    TitleType,
    Writer,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
