const { mongoose } = require('./db.js');
const Doctor = require('./Doctor/controllers/doctorController');
const Patient = require('./Patient/controllers/patientController');
const Prescription = require('./Prescription/controllers/prescriptionController');
const Invoice = require('./Invoice/controller/invoiceController');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//controller
const appointmentController= require('./Appointment/controllers/apointmentController.js')
const medicineController= require('./Medicine/controllers/medicineController.js')
const employeeController= require('./Employee/controllers/employeeController.js')
const clinicServiceController= require('./ClinicService/controllers/clinicServiceController')

//call express 
var App = express();

//use middleware
App.use(bodyParser.json())
App.use(cors({ origin: 'http://localhost:4200' }));

//listen
App.listen(3000, () => {
    console.log("Server started at port: 3000")
})

App.use('/appointment', appointmentController)
App.use('/medicine', medicineController)
App.use('/invoice', Invoice);
App.use('/prescript', Prescription);
App.use('/doctor', Doctor);
App.use('/patient', Patient)
App.use('/employee',employeeController)
App.use('/clinicService', clinicServiceController)