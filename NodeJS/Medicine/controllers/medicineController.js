const validationMedicine = require('../middleware/medicineValidationMiddle');
const _ = require('lodash');
const bcrypt = require('bcrypt');
//apointment
var { medicine } = require('../models/medicine');
//express
var express = require('express')

//router
var router = express.Router()

//-------------------------------------------Get List
//read
//localhost:3000/appointment/
router.get('/', async (req, res) => {
    const med = await medicine.find(req.appointment);
    if (med) return res.send(med);
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

    const med = await medicine.findById(req.params.id);

    if (!med) return res.status(404).send('The genre with the given ID was not found.');

    res.send(med);

})

//-----------------------------------------------Add
//create
router.post('/', async (req, res) => {
    const { error } = validationMedicine(req.body);
    if (error == true) return res.status(400).send(error.details[0].message);

    let med = new medicine(_.pick(req.body, ['_id', 'name', 'brand', 'description']));
    //check id if  it found or not -- هنا بشوف ال متسجل قبل كده ولا لا(id)
    //👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯
    const check = await medicine.findById(req.body._id);
    if (check) return res.status(400).send('The ID already Registred!');

    med = await med.save();
    res.send(med);
})


//-----------------------------------------------Update
router.put('/:id', (req, res) => {
    //--------------Check Body Request
    const { error } = validationMedicine(req.body);
    if (error == true) return res.status(400).send(error.details[0].message);

    if (!req.params.id)
        return res.status(400).send("No record given with id: " + req.params.id)

    let newMedicine = new medicine({
        _id: req.params.id,
        name: req.body.name,
        brand: req.body.brand,
        description: req.body.description,
    })


    medicine.findByIdAndUpdate(req.params.id, { $set: newMedicine }, { new: true }, (err, doc) => {
        if (!err)
            res.send(doc)
        else
            console.log("Error in Medicine Update: " + JSON.stringify(err, undefined, 2))
    })
    // res.send(newMedicine)
})


//-----------------------------------------------Delete
router.delete('/:id', async (req, res) => {
    if (!req.params.id)
        return res.status(400).send("No record given with id: " + req.params.id)

    const med = await medicine.findByIdAndRemove(req.params.id);

    if (!med) return res.status(404).send('The medicine with the given ID was not found.');

    //res.send("DELETE FROM DB\t" + med);
})

module.exports = router