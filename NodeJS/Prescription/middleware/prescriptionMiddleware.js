const Joi = require('joi');

module.exports = function validationPrescription(req) {
    const schema = Joi.object({
        prescriptionId: Joi.number().required(),
        doctorId: Joi.objectId().required(),
        patientId: Joi.objectId().required(),
        medicineId: Joi.objectId().required(),
        numberOfDoses: Joi.number(),
        dateOfPrescription: Joi.date()
    });
    return schema.validate(req);
}