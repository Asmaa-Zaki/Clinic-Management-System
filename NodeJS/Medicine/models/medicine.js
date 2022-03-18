//mongoose
const mongoose = require('../../db.js')

//model schema
let medicine = mongoose.model('Medicine',
    {
        _id: {type: Number},
        name: {type: String},
        brand: {type: String},
        description: {type: String}
    })
//export the medicine model
module.exports = { medicine }
