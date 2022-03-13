//mongoose
const mongoose = require('../db.js')

//model schema
var appointment = mongoose.model('Appointment', 
{
    doctorId: {type: Number},
    startTime: {type: Number},
    endTime: {type:Number},
    medicalSpecialty : {type: String}
});

//export the model
module.exports = {appointment}

