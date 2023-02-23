const express = require('express');
const app = express();
const db = require('./connection');
app.set('view engine', 'ejs');

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
const path = require('path');
const upload = require('./uploads');
app.use(express.static(path.resolve('./public')));


var obj = {};


app.get('/', function(req,res){
   let sql = 'SELECT * FROM project ORDER BY id DESC';
   db.query(sql, function(err, results){
       if(err) {
           throw err;
       } else {
           obj = {data: results};
           res.render('index', obj)
       }
   });
});


app.get('/post', function(req,res){
    res.render('post')
 
 });


app.listen(process.env.PORT || 3000, function(){
   console.log('server, port 3000');
});


app.post('/post', upload.single('img'), function(req,res){
   const title = req.body.title;
   const text = req.body.text;
   //const img = "";
   const img = "/uploads/" + req.file.filename;
   const sqlInstert = "INSERT INTO project (title, text, img) VALUES (?, ?, ?);"
   db.query(sqlInstert, [title, text, img], (err, result)=> {
       if(err) {
           throw err;
       } else {
           res.send('poSt addud');
       }
   });
});