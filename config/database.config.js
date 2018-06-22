var mongoose = require('mongoose');
module.exports = mongoose.connect('mongodb+srv://admin:admin@cluster0-tyjvv.mongodb.net/practice?retryWrites=true')
    .then(() => {
        console.log("DB connected")
    }, err => {
        console.log("DB error")
    }
    );