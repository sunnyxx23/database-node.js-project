const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'linus_a',
  password: '123',
  database: 'node'
});

db.connect(function(err){
  if(err) {
      console.log(err);
  } else {
      console.log('connected to mySQL');
  }
});


module.exports = db;