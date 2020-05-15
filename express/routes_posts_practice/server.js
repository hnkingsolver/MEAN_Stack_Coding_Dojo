const express = require("express");
const app = express();

// PUT SESSION OBJECT HERE
const session = require('express-session');
app.use(session({
    secret: 'keepitsecretkeepitsafe',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

// app.get('/', (request, response) => {
//     response.send("Hello Express");
// });

app.post('/process_form', (req, res) => {
    req.session.name = req.body.fname;
    req.session.whatever = 42;
    //do something with form data
    console.log(req.body);
    // res.redirect('/')
    context = {
        "name": req.body.fname
    }
    console.log('context.name is:', context.name);
    res.render('success', context)
});

app.get('/users/:id/:word', (req, res) => {
    console.log(req.params.word);
    //uncomment this to see that code comes from the url rendered to success page as whatever was in params
    // context = {
    //     "name" : req.params.banana
    // }
    // res.render('success', context)
    console.log(req.params.id);
    res.redirect('/')
});

app.get('/session', (req, res) => {
    console.log(req.session);
    console.log("Value of name in Session: ", req.session.name);
    res.redirect('/')
});

app.listen(8000, () => console.log("listening on port 8000"));