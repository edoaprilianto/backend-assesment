var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors')


// create express app
var app = express();

//use cors
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// Configuring the database (If you want to use MongoDB)
// var dbConfig = require('./config/database.config.js');
// var mongoose = require('mongoose');

// mongoose.Promise = global.Promise;

// mongoose.connect(dbConfig.url, {
// 	useMongoClient: true
// });

// mongoose.connection.on('error', function() {
//     console.log('Could not connect to the database. Exiting now...');
//     process.exit();
// });
// mongoose.connection.once('open', function() {
//     console.log("Successfully connected to the database");
// })

// define a simple route
app.get('/', function(req, res){
    res.json({"message": "Welcome to Test Assesment application."});
});

require('./app/routes/form.routes.js')(app);

// listen for requests
app.listen(3000, function(){
    console.log("Server is listening on port 3000");
});
