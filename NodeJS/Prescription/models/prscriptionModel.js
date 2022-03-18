const mongoose = require('mongoose');
let prescriptionSchema = mongoose.Schema({
    prescriptionId: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100
    },
    doctorId: {
        type: doctorSchema,
        required: true
    },
    patientId: {
        type: patientSchema,
        required: true
    },
    medicineId: {
        type: medicinSchema,
        required: true
    },
    numberOfDoses: {
        trype: Number,
        required: function () {
            return this.medicinName > 0;
        }
    },
    dateOfPrescription: {
        type: Date,
        required: function () {
            return this.medicinName > 0;
        }
    }
});
const Prescription = mongoose.model('Prescription', prescriptionSchema);

exports.Prescription = Prescription;
exports.prescriptionSchema = prescriptionSchema;