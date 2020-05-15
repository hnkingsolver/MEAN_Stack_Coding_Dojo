//imports
const express = require('express')
const ejs = require('ejs')

//settings
const app = express()
app.use(express.static(__dirname +'/static'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

//routing

//what our server does when someone makes a get request to the '/'
app.get('/', (req,res) => {
    res.send('Hello from the other sideeeee jk hey from the / route')
})

app.get('/home', (req,res) => {
    res.render('home')
})

//starting server
app.listen(6789,() => {
    console.log('started server on 6789')
});