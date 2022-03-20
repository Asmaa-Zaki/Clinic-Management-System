const mongoose = require('mongoose');
const medicineSchema = require('../../Medicine/models/medicine');
let prescriptionSchema = mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    doctorId: {
        type: Number,
        required: true
    },
    patientId: {
        type: Number,
        required: true
    },
    medicineId: {
        type: Number,
        required: true
    },
    numberOfDoses: {
        type: String,
        required: function () {
            return this.medicineId > 0;
        }
    },
    dateOfPrescription: {
        type: Date,
        default: Date.now,
        required: function () {
            return this.medicineId > 0;
        }
    }
});
//     _id: {
//         type: String,
//         required: true,
//         minlength: 5,
//         maxlength: 100
//     },
//     doctorId: {
//         type: doctorSchema,
//         required: true
//     },
//     patientId: {
//         type: patientSchema,
//         required: true
//     },
//     medicineId: {
//         type: medicineSchema,
//         required: true
//     },
//     numberOfDoses: {
//         trype: Number,
//         required: function () {
//             return this.medicineId > 0;
//         }
//     },
//     dateOfPrescription: {
//         type: Date,
//         default: Date.now,
//         required: function () {
//             return this.medicineId > 0;
//         }
//     }
// });
const Prescription = mongoose.model('Prescription', prescriptionSchema);

exports.Prescription = Prescription;
exports.prescriptionSchema = prescriptionSchema;