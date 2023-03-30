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
    res.render("post")
/*   let sql = 'SELECT * FROM project ORDER BY id DESC';
   db.query(sql, function(err, results){    
       if(err) {
           throw err;
       } else {
           obj = {data: results};
           res.render('index', obj)
       }
   });*/
});

app.get('/post', function(req,res){
    res.render('post')
 
 });


app.listen(process.env.PORT || 3000, function(){
   console.log('server, port 3000');
});

app.get('/search', function(req,res){
    res.render('search')
 });

app.post('/search', function(req, res){
    let sql = 'SELECT * FROM project WHERE '+req.body.searchBy+' LIKE ?'

    db.query(sql, '%'+req.body.searchQuery+'%', function(err, results){
        if(err) {
            throw err;
        } else {
            console.log(results);
            console.log('Filtered content');
            obj = {data: results};
            res.render('index', obj);
        }
    });
});


app.post('/submitted', function(req,res){
    const fname = req.body.fname;
    const lname = req.body.lname;
    const pnummer = req.body.pnummer;
    const btype = req.body.btype;
    var bdis = "";
    if(req.body.bdis == "on"){
        bdis = 1;
    } else {
        bdis = 0;
    }
   
   const sqlInstert = "INSERT INTO project (fname, lname, pnummer, btype, bdis) VALUES (?, ?, ?, ?, ?);"
   
   db.query(sqlInstert, [fname, lname, pnummer, btype, bdis], (err, result)=> {
       if(err) {
           throw err;
       } else {
           res.render('sucess');
       }
   });
   
});