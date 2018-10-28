const path = require("path")
const express = require("express")
const logger = require("morgan")
const bodyParser = require("body-parser")

const app = express()  // make express app
const port = 8081
const fs = require('fs')

// ADD THESE COMMENTS AND IMPLEMENTATION HERE
// 1 set up the view engine
// 2 include public assets and use bodyParser
// 3 set up the logger
// 4 handle valid GET requests
// 5 handle valid POST request
// 6 respond with 404 if a bad URI is requested

// Listen for an application request on port 8081

// 1 set up the view engine
app.set("views", path.resolve(__dirname, "views")) // path to views
app.set("view engine", "ejs") // specify our view

// 2 include public assets and use bodyParser
// Node uses __dirname for the The directory name of the current module.
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 3 log requests to stdout and also
// log HTTP requests to a file using the standard Apache combined format
// see https://github.com/expressjs/morgan for more
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', { flags: 'a' });
app.use(logger('dev'));
app.use(logger('combined', { stream: accessLogStream }));
if (process.env.NODE_ENV === 'production') {
  app.get('*', function (req, res, next) {
  if (req.headers['x-forwarded-proto'] != 'https') {
    res.redirect('https://resumesite563.herokuapp.com/' + req.url)
  } else { next() }
})
}

// 4 http GET default page at /
app.get('/', function (req, res) {
//res.sendFile(path.join(__dirname + '/assets/index.html'))
res.render('index.ejs')
})

// 4 http GET /loancalculator
app.get('/loancalculator', function (req, res) {
res.render('loancalculator.ejs')
})

// 4 http GET /contact
app.get('/contact', function (req, res) {
res.render('contact.ejs')
})

// 5 http POST /AboutMe
app.get('/index', function (req, res) {
  //res.sendFile(path.join(__dirname + '/assets/index.html'))
  res.render('index.ejs')
  })

// 6 this will execute for all unknown URIs not specifically handled
app.get(function (req, res) {
res.render('404.ejs')
})
// 7 this will execute test cases
// app.get('/A03Tests', function (req, res) {
//   res.render('A03Tests.ejs')
//   })

// Listen for an application request on designated port
app.listen(port, function () {
console.log('\nWeb app started and listening on http://localhost:' + port + '.')

console.log('\nKeep this open while serving, and use CTRL-C to quit.')
})