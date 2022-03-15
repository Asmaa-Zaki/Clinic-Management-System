//express
var express = require('express')

//router
var router = express.Router()

//apointment
var {appointment} = require('../models/appointment')

//read
//localhost:3000/appointment/
router.get('/',(req, res)=>{
    appointment.find((err, docs)=>{
        if(!err)
            res.send(docs)
        else
        console.log("Error in Retriving Appointments : " + JSON.stringify(err, undefined, 2))
    })
})

//read by id
//localhost:3000/appointment/id(value)
router.get('/:id',(req, res)=>{
    if(!req.params.id)
        return res.status(400).send("No record given with id: "+req.params.id)

    appointment.findById(req.params.id, (err, doc)=>
    {
        if(!err)
            res.send(doc)
        else
            res.send("Error in Retriving Appointment id: "+ JSON.stringify(err, undefined, 2))
    })
})

//create
router.post('/',(req, res)=>{
    var emp = new appointment({
        _id: req.body.id,
        doctorId: req.body.doctorId,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        medicalSpecialty: req.body.medicalSpecialty,
    })
    emp.save((err, doc)=>
    {
        if(!err)
            console.log("Appointment Saved")
           //res.send({mess:"Appointment Saved"})
        else    
            console.log("Error in save Appointment: " +JSON.stringify(err, undefined, 2))
           // res.send("error"+JSON.stringify(err, undefined,2))
    })
    res.send(emp)
})


//update
router.put('/:id', (req, res)=>{
    if(!req.params.id)
    return res.status(400).send("No record given with id: "+req.params.id)

    var newAppointment = new appointment({
            _id: req.params.id,
            doctorId: req.body.doctorId,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            medicalSpecialty: req.body.medicalSpecialty,
        })

    
    appointment.findByIdAndUpdate(req.params.id, {$set:newAppointment}, {new: true}, (err, doc)=>
    {
        if(!err)
            res.send(doc)
        else
            console.log("Error in Appointment Update: " +JSON.stringify(err, undefined,2))
    })
   // res.send(newAppointment)
})


//delete
router.delete('/:id', (req, res)=>{
    if(!req.params.id)
    return res.status(400).send("No record given with id: "+req.params.id)

    appointment.findByIdAndRemove(req.params.id, (err, doc)=>
    {
        if(!err)
           // res.send("deleted"+doc)
           console.log("Delteed")
        else
        console.log("Error in Appointment Delete: " +JSON.stringify(err, undefined,2))
    })
})

module.exports = router