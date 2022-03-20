const mongoose = require('mongoose');
const validationPrescription = require('../middleware/prescriptionMiddleware');
const { Prescription } = require('../models/prscriptionModel');
const Medicine = require('../../Medicine/models/medicine');
const express = require('express');
const router = express.Router();

//---------------------------------Get List
router.get('/', async (req, res) => {
    const prescript = await Prescription.find()
    if (!prescript) return res.status(400).send('Not found any record!');
    res.send(prescript);
}); //end of Get

//--------------------------------------Get By ID
router.get('/:id', async (req, res) => {
    const prescript = await Prescription.findById(req.params.id);
    if (!prescript) return res.status(400).send("Not found this ID");
    res.send(prescript);
});//end of Get By Id

//--------------------------------------Add
router.post('/', async (req, res) => {
    // const doctor = await Doctor.findById(req.body.doctorId);
    // if (!doctor) return res.status(400).send('Invalid doctor Id');

    // const patient = await Patient.findById(req.body.patientId);
    // if (!patient) return res.status(400).send('Invalid patient Id');

    // const medicine = await Medicine.findById(req.body.medicineId);
    // if (!medicine) return res.status(400).send('Invalid medicine Id');

    const { error } = validationPrescription(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let prescript = new Prescription({
        // doctorId: {
        //     name: doctor.name
        // },
        // patientId: {
        //     name: patient.name
        // },
        // medicineId: {
        //     name: medicine.name
        // },
        _id: req.body._id,
        doctorId: req.body.doctorId,
        patientId: req.body.patientId,
        medicineId: req.body.medicineId,
        numberOfDoses: req.body.numberOfDoses,
        dateOfPrescription: req.body.dateOfPrescription
    });
    const chechRegist = await Prescription.findById(req.body._id);
    if (chechRegist) return res.status(400).send('This Id already register');
    prescript = await prescript.save();
    res.send(prescript);
});//end of Add

//--------------------------------------Update
router.put('/:id', async (req, res) => {
    // const doctor = await Doctor.findById(req.body.doctorId);
    // if (!doctor) return res.status(400).send('Invalid doctor Id');

    // const patient = await Patient.findById(req.body.patientId);
    // if (!patient) return res.status(400).send('Invalid patient Id');

    // const medicine = await Medicine.findById(req.body.medicineId);
    // if (!medicine) return res.status(400).send('Invalid medicine Id');

    const { error } = validationPrescription(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const prescript = await Prescription.findByIdAndUpdate(req.params.id, {
        // _id: req.body._id,
        // doctorId: {
        //     name: doctor.name
        // },
        // patientId: {
        //     name: patient.name
        // },
        // medicineId: {
        //     name: medicine.name
        // },
        // numberOfDoses: req.body.numberOfDoses,
        // dateOfPrescription: req.body.dateOfPrescription
        _id: req.body._id,
        doctorId: req.body.doctorId,
        patientId: req.body.patientId,
        medicineId: req.body.medicineId,
        numberOfDoses: req.body.numberOfDoses,
        dateOfPrescription: req.body.dateOfPrescription
    }, { new: true });
    if (!prescript) return res.status(400).send("Invalid Id!");
    res.send("Updated\t" + prescript);

});//end Update

//--------------------------------------Delete
router.delete('/:id', async (req, res) => {
    const prescript = await Prescription.findByIdAndRemove(req.params.id);
    if (!prescript) return res.status(400).send("Invalid Id!");
    res.send("DELETE FROM DB\t" + prescript);
});
module.exports = router;
