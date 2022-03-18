const validationAppointment = require('../middleware/appointValidationMiddle');
const _ = require('lodash');
const bcrypt = require('bcrypt');
//apointment
var { appointment } = require('../models/appointmentt');
//express
var express = require('express')

//router
var router = express.Router()

//-------------------------------------------Get List
//read
//localhost:3000/appointment/
router.get('/', async (req, res) => {
    const appoint = await appointment.find(req.appointment);
    if (appoint) return res.send(appoint);
    return res.status(400).send('Not Found Any Record');
    // appointment.find((err, docs) => {
    //     if (!err)
    //         res.send(docs)
    //     else
    //         console.log("Error in Retriving Appointments : " + JSON.stringify(err, undefined, 2))
    // })
});

//-----------------------------------------------Get By ID
router.get('/:id', async (req, res) => {
    if (!req.params.id)
        return res.status(400).send("No record given with id: " + req.params.id)

    if (!req.params.id)
        return res.status(400).send("No record given with id: " + req.params.id)

    const appoint = await appointment.findById(req.params.id);

    if (!appoint) return res.status(404).send('The genre with the given ID was not found.');

    res.send(appoint);

})

//-----------------------------------------------Add
//create
router.post('/', async (req, res) => {
    const { error } = validationAppointment(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let appoint = new appointment(_.pick(req.body, ['_id', 'doctorId', 'startTime', 'endTime', 'medicalSpecialty']));
    //check id if  it found or not -- هنا بشوف ال متسجل قبل كده ولا لا(id)
    //👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯
    const check = await appointment.findById(req.body._id);
    if (check) return res.status(400).send('The ID already Registred!');

    appoint = await appoint.save();
    res.send(appoint);
})


//-----------------------------------------------Update
router.put('/:id', (req, res) => {
    //--------------Check Body Request
    const { error } = validationAppointment(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    if (!req.params.id)
        return res.status(400).send("No record given with id: " + req.params.id)

    var newAppointment = new appointment({
        _id: req.params.id,
        doctorId: req.body.doctorId,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        medicalSpecialty: req.body.medicalSpecialty,
    })


    appointment.findByIdAndUpdate(req.params.id, { $set: newAppointment }, { new: true }, (err, doc) => {
        if (!err)
            res.send(doc)
        else
            console.log("Error in Appointment Update: " + JSON.stringify(err, undefined, 2))
    })
    // res.send(newAppointment)
})


//-----------------------------------------------Delete
router.delete('/:id', async (req, res) => {
    if (!req.params.id)
        return res.status(400).send("No record given with id: " + req.params.id)

    const appoint = await appointment.findByIdAndRemove(req.params.id);

    if (!appoint) return res.status(404).send('The genre with the given ID was not found.');

    res.send("DELETE FROM DB\t" + appoint);
})

module.exports = router