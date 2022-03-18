//express
const express = require('express');

//body-parser
const bodyParser = require('body-parser');

//cors allow requist from any port number
const cors= require('cors')

//mongoose
const { mongoose } = require('./db.js');

//controller
const appointmentController= require('./Appointment/controllers/apointmentController.js')
const medicineController= require('./Medicine/controllers/medicineController.js')

//call express 
var App = express();

//use middleware
App.use(bodyParser.json())
App.use(cors({origin: 'http://localhost:4200'}));

//listen
App.listen(3000, ()=>{
    console.log("Server started at port: 3000")
})

App.use('/appointment', appointmentController)
App.use('/medicine', medicineController)
