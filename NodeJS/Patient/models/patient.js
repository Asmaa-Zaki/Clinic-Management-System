//mongoose
const mongoose = require('../../db.js')

//model schema
var patient = mongoose.model('Patient',
    {
        _id: { type: Number },
        patientName: { type: String },
        SSN: { type: Number },
        phone: { type: Number },
        address: { type: String },
        gender: { type: String },
        insuranceId: { type: Number }
    });

//export the model
module.exports = { patient }

