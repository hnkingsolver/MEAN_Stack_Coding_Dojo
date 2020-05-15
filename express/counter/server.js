const express = require("express");
const app = express();
// PUT SESSION OBJECT HERE
const session = require('express-session');
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));


app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
    if(!req.session.count){
        req.session.count =1;
    }
    res.render("index", {count:req.session.count});
})
app.post('/counter', function(req,res){
    console.log('Post data: user clicked button' + ' ' + req.session.count)
    req.session.count +=2;
    res.redirect('/')
})
app.post('/reset',function(req,res){
    console.log('user reset session')
    req.session.destroy();
    res.redirect('/')
})

app.listen(8000, () => console.log("listening on port 8000"));