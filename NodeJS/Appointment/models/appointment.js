//mongoose
const mongoose = require('../../db.js')

//model schema
let appointment = mongoose.model('Appointment',
    {
        _id: { type: Number },
        doctorId: { type: Number },
        startTime: { type: Number },
        endTime: { type: Number },
        medicalSpecialty: { type: String },
    });

//export the appointment model
module.exports = { appointment }

