const app = require('express')();
const http = require('http').Server(app);
const mongoose = require("mongoose");
const cors = require('cors');
const { Sequelize, Op } = require('sequelize');
const initModels = require("./models/init-models");

const io = require("socket.io")(http, {
    cors: { origin: "*" }
});

const port = process.env.PORT || 3000;
const { Schema } = mongoose
const TitleSchema = new Schema({}, { strict: false })
let MongoTitle;
let models;
let intervalTime = 1000 * 20
let interval;

const sequelize = new Sequelize('netflix', 'panda', 'Panda@123456', {
    host: '20.226.27.138',
    dialect: 'mssql',
    logging: false,
    define: {
        timestamps: false,
    }
});


const init = async () => {
    try {
        await sequelize.authenticate();
        models = initModels(sequelize)
        console.log('Connection to MSSQL has been established successfully.');

        mongoose.connect('mongodb://panda:Panda%40123456@20.226.19.148:27017/?authMechanism=DEFAULT', {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }, () => {
            console.log("connected to MongoDB")
            MongoTitle = mongoose.model('netflix', TitleSchema)

            interval = setInterval(retrieve, intervalTime)
            io.emit('logs', `Daemon started, will run every ${intervalTime}ms`)

        })

    } catch (error) {
        console.error('Unable to connect to the database:', error);
        await sequelize.close()
        await mongoose.disconnect()
    }
}
init()


const retrieve = async () => {
    try {
        io.emit('logs', `Daemon started at ${new Date().toLocaleTimeString()}`)
        const last = await MongoTitle.find({}, { dbId: 1 }).sort({ dbId: -1 }).limit(1)
        const lastId = last.map(item => item.dbId).pop() || 0

        console.log({ last })

        const titles = await models.Title.findAll({ where: { id: { [Op.gt]: lastId } }, include: { all: true } })
        if ( titles.length === 0){
            io.emit('logs', `Nothing to retrieve`)
        } else{
            io.emit('logs', `found ${titles.length} movies to import`)
        }

        titles.map(title => {
            const json = title.toJSON()
            json.dbId = json.id
            delete json.id
            const record = new MongoTitle({ ...json })
            record.save()
            io.emit('logs', `Movie ${json.dbId} - ${json.originalTitle} saved on MongoDB`)
            console.log(`Movie ${json.dbId} - ${json.originalTitle} saved on MongoDB`)
        })

        io.emit('logs', `Daemon finished at ${new Date().toLocaleTimeString()}`)


    } catch (error) {
        console.error(error)
    }

}

app.use(cors())

app.get('/daemon', (req, res) => {
    res.send({ isRunning: true, intervalTime })
});

app.post('/daemon', (req, res) => {
    const { time } = req.query
    clearInterval(interval)
    intervalTime = parseInt(time)
    interval = setInterval(retrieve, intervalTime)
    res.send({ isRunning: true, intervalTime })

    io.emit('logs', `Daemon updated, will run every ${intervalTime}ms`)

})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {

    socket.emit('welcome', "Hola, te conectaste a las: " + new Date().toISOString())
    socket.emit('welcome', "Se te mostrarán los logs en tiempo real")
    io.emit('logs', `Daemon started, will run every ${intervalTime}ms`)
    socket.on('chat message', msg => {
        io.emit('chat message', msg);
    });
});

http.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
});

process.on('SIGTERM', async () => {
    await sequelize.close()
    clearInterval(interval)
    console.info('SIGTERM signal received.');
});

