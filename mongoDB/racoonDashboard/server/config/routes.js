const racoon = require('../controllers/racoon')

module.exports = function(app){
    app.get("/", (req, res) => {
        racoon.index(req,res)
    });

    app.post("/racoon", (req, res) => {
        racoon.newRacoon(req,res)
    });
    
    app.get("/racoon/new", (req, res) => {
        racoon.addRacoon(req,res)
    });
    
    app.get("/racoon/:id", (req, res) => {
        racoon.showRacoon(req,res)
    })
    
    app.get("/racoon/edit/:id", (req, res) => {
        racoon.editRacoon(req,res)
    })
    
    app.post("/racoon/:id", (req, res) => {
        racoon.updateRacoon(req,res)
    })
    
    app.post("/racoon/destroy/:id", (req, res) => {
        racoon.destroyRacoon(req,res)
    })
}