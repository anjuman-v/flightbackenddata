const express = require("express");
const cors = require("cors");

const mongoConnector = require('./configs/db');

const  flightController = require('./controllers/flight.controller');
const airportController = require('./controllers/airport.controller');

const { register, login } = require('./controllers/user.controller');

const app = express();
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 5000

app.use('/', flightController);

app.use('/', airportController);
app.use('/signup', register);
app.use('/signin', login);

module.exports = () => {

    app.listen(port, async () => {
        try{
            await mongoConnector()
            console.log(`Listening on port ${port}...`)
        } catch (error) {
            console.log({
                message : error.message,
                status : "something goes wrong"
            })
        }
    })
}