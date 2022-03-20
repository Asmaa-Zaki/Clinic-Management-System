const Joi = require('joi');

module.exports = function validationPrescription(req) {
    const schema = Joi.object({
        _id: Joi.number().required(),
        doctorId: Joi.number().required(),
        patientId: Joi.number().required(),
        medicineId: Joi.number().required(),
        numberOfDoses: Joi.string(),
        dateOfPrescription: Joi.date()
    });
    return schema.validate(req);
}