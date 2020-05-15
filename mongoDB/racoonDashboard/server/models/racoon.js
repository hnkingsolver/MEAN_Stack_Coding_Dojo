const mongoose = require('mongoose')

const RacoonSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
},
    {
        timestamps: true
    });

module.exports = {
    Racoon : mongoose.model('Racoon', RacoonSchema)
}