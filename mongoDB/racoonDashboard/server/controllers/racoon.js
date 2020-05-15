const {Racoon} = require('../models/racoon')
var moment = require('moment');

module.exports = {
    index: (req,res) => {
        Racoon.find({}, (err, data) => {
            var context = {
                data: data,
            };
            if (err) {
                console.log("Something went wrong");
            }
            res.render("index", context);
        });
    },

    newRacoon: (req,res) => {
        const racoon = new Racoon();
        racoon.name = req.body.name;
        racoon.age = req.body.age;
        racoon.save().catch((err) => {
            console.log("Error saving racoon", err);
        });
        res.redirect("/");
    },

    addRacoon: (req,res) => {
        res.render("add_racoon");
    },

    showRacoon: (req,res) => {
        Racoon.find({
            _id: req.params.id
        }, (err, data) => {
            var context = {
                data: data,
                moment: moment
            }
            if (err) {
                console.log('Something went wrong racoon info page', err);
            }
            res.render('racooninfo', context)
        })
    },

    editRacoon: (req,res) => {
        Racoon.find({
            _id: req.params.id
        }, (err, data) => {
            var context = {
                data: data,
            }
            if (err) {
                console.log("Something wrong with edit page", err)
            }
            res.render("edit_racoon", context)
        })
    },

    updateRacoon: (req,res) => {
        Racoon.update({
            _id: req.params.id
        }, {
            name: req.body.name,
            age: req.body.age
    
        }, err => {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                res.redirect("/");
            };
        })
    },

    destroyRacoon: (req,res) => {
        Racoon.remove({
            _id: req.params.id
        }, err => {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                res.redirect('/')
            }
        })
    }
}