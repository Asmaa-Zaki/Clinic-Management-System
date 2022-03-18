const mongoose = require('mongoose');
const validationPrescription = require('../middleware/prescriptionMiddleware');
const { Prescription } = require('../models/prscriptionModel');
const express = require('express');
const router = express.Router();

//--------------------------Get List
router.get('/', async (req, res) => {
    const prescript = await Prescription.find()
    if (!prescript) return res.status(400).send('Not found any record!');
    res.send(prescript);
}); //end of Get

//--------------------------Get By ID
router.get('/:id', (req, res) => {
    const prescript = await Prescription.findById(req.params.id);
    if (!prescript) return res.status(400).send("Not found this ID");
    res.send(prescript);
});//end of Get By Id

//------------------------------Add
router.post('/', async (req, res) => {
    const doctor = await Doctor.findById(req.body.doctorId);
    if (!doctor) return res.status(400).send('Invalid doctor Id');

    const patient = await Patient.findById(req.body.patientId);
    if (!patient) return res.status(400).send('Invalid patient Id');

    const medicine = await Medicine.findById(req.body.medicineId);
    if (!medicine) return res.status(400).send('Invalid medicine Id');

    const { error } = validationPrescription(req.body);
    if (!error) return res.status(400).send(error.details[0].message);

    let prescript = new Prescription({
        prescriptionId: req.body.prescribtion,
        doctorId: {
            name: doctor.name
        },
        patientId: {
            name: patient.name
        },
        medicineId: {
            name: medicine.name
        },
        numberOfDoses: req.body.numberOfDoses,
        dateOfPrescription: req.body.dateOfPrescription
    });
    res.send(prescript);
});//end of Add

//--------------------Update
router.put('/:id', (req, res) => {
    const { error } = validationPrescription(req.body);
    if (!error) return res.status(400).send(error.details[0].message);

    const prescript = await Prescription.findByIdAndUpdate(req.params.id, {
        prescriptionId: req.body.prescribtion,
        doctorId: {
            name: doctor.name
        },
        patientId: {
            name: patient.name
        },
        medicineId: {
            name: medicine.name
        },
        numberOfDoses: req.body.numberOfDoses,
        dateOfPrescription: req.body.dateOfPrescription
    });
    if (!prescript) return res.status(400).send("Invalid Id!");
    res.send(prescript);

});//end Update
router.delete('/:id', async (req, res) => {
    const prescript = await Prescription.findByIdAndRemove(req.params.id);
    if (!prescript) return res.status(400).send("Invalid Id!");
    res.send("DELETE FROM DB\t" + prescript);
});
module.exports = router;
