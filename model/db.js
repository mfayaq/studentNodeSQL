'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'remotemysql.com',
    user     : 'NMpbx2VFr1',
    password : 'WRTswZmB8Q',
    database : 'NMpbx2VFr1'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;