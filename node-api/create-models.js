var SequelizeAuto = require('sequelize-auto')
var auto = new SequelizeAuto('netflix', 'panda', 'Panda@123456',{
    host: '20.226.27.138',
    dialect: 'mssql'
});

auto.run(function (err) {
    if (err) throw err;
    console.log(auto.tables); // table list
    console.log(auto.foreignKeys); // foreign key list
});
