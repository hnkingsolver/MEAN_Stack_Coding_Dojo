const express = require("express");
const app = express();
// PUT SESSION OBJECT HERE


app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.render('cats.ejs')
});

app.get('/jojo', function (req, res) {
    cat = {
        fav_food: 'Waffles',
        age: 4,
        sleeping_spots: ['On top of the cat tree or ', 'Inside the pantry']
    }
    res.render('jojo.ejs', cat)
})

app.get('/gigi', function (req, res) {
    cat = {
        fav_food: 'Pickles',
        age: 2,
        sleeping_spots: ['In your arms']
    }
    res.render('gigi.ejs', cat)
})

app.get('/mochi', function (req, res) {
    cat = {
        fav_food: 'Mochi ice-cream: matcha & strawberry',
        age: 1,
        sleeping_spots: ['On your pillow']
    }
    res.render('mochi.ejs', cat)
})

app.listen(8000, () => console.log("listening on port 8000"));