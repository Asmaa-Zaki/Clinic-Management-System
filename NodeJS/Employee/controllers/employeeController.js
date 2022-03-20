const validationEmployee = require('../middleware/employeeValidationMiddle')
const _ = require('lodash')
// employee
var {employee}= require('../models/employee')
//express
var express = require('express')

//router
var router = express.Router()

//-------------------------------------------Get List
//read
//localhost:3000/appointment/
router.get('/', async (req, res) => {
    const emp = await employee.find(req.employee);
    if (emp) return res.send(emp);
    return res.status(400).send('Not Found Any Record');
    // employee.find((err, docs) => {
    //     if (!err)
    //         res.send(docs)
    //     else
    //         console.log("Error in Retriving Employees : " + JSON.stringify(err, undefined, 2))
    // })
})

//-----------------------------------------------Get By ID
router.get('/:id', async (req, res) => {
    if (!req.params.id)
        return res.status(400).send("No record given with id: " + req.params.id)

    if (!req.params.id)
        return res.status(400).send("No record given with id: " + req.params.id)

    const emp = await employee.findById(req.params.id);

    if (!emp) return res.status(404).send('The genre with the given ID was not found.');

    res.send(emp);

})

//-----------------------------------------------Add
//create
router.post('/', async (req, res) => {
    const { error } = validationEmployee(req.body);
    if (error == true) return res.status(400).send(error.details[0].message);

    let emp = new employee(_.pick(req.body, ['_id', 'firstName', 'lastName', 'email', 'phone','userName', 'password']));
    //check id if  it found or not -- هنا بشوف ال متسجل قبل كده ولا لا(id)
    //👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯👨🏼‍🦯
    const check = await employee.findById(req.body._id);
    if (check) return res.status(400).send('The ID already Registred!');

    emp = await emp.save();
    res.send(emp);
})

//-----------------------------------------------Update
router.put('/:id', (req, res) => {
    //--------------Check Body Request
    const { error } = validationEmployee(req.body);
    if (error == true) return res.status(400).send(error.details[0].message);

    if (!req.params.id)
        return res.status(400).send("No record given with id: " + req.params.id)

    var newEmployee = new employee({
        _id: req.params.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        userName: req.body.userName,
        password: req.body.password,
    })


    employee.findByIdAndUpdate(req.params.id, { $set: newEmployee }, { new: true }, (err, doc) => {
        if (!err)
            res.send(doc)
        else
            console.log("Error in Employee Update: " + JSON.stringify(err, undefined, 2))
    })
    // res.send(newEmployee)
})


//-----------------------------------------------Delete
router.delete('/:id', async (req, res) => {
    if (!req.params.id)
        return res.status(400).send("No record given with id: " + req.params.id)

    const emp = await employee.findByIdAndRemove(req.params.id);

    if (!emp) return res.status(404).send('The genre with the given ID was not found.');

    res.send({"DELETE FROM DB\t" : emp});
    //res.send("DELETE FROM DB\t" + emp);
})

module.exports = router
