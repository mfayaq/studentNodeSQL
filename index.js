const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  port = process.env.PORT;


const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
  host: 'remotemysql.com',
  user: 'NMpbx2VFr1',
  password: 'WRTswZmB8Q',
  database: 'NMpbx2VFr1'
});

// connect to database
mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/routes'); //importing route
routes(app); //register the route