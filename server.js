const express = require('express');
const app = express();
const db = require('./connection');
app.set('view engine', 'ejs');

const sessions = require('express-session');
//username and password
const myusername = 'user1'
const mypassword = 'mypassword'

// a variable to save a session
var session;

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
const path = require('path');
const upload = require('./uploads');
app.use(express.static(path.resolve('./public')));

const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false 
}));

app.get('/login',(req,res) => {
    session=req.session;
    console.log(session)
    if(session.userid){
        res.send("Welcome User <a href=\'/logout'>click to logout</a>");
    } else {
        res.render('login', {data: ''})
    }
});

app.post('/user',(req,res) => {
    console.log(req.body.username)
    let sql = 'SELECT * FROM users WHERE username = ? AND password = ?'
    db.query(sql, [req.body.username, req.body.password], function(err, result){
        if (err){
        }   else {
            if (result == "") {
                res.render('login', {data: {status:'wrong user/pass'}});
            }
            else if(req.body.username == result[0].username && req.body.password == result[0].password){
                session=req.session;
                session.userid=req.body.username;
                console.log(req.session)
                res.render('user', { username: req.body.username });
            }
            
        }
       })
  
})

app.get('/user', (req,res) => {
    const username = req.session.userid
    res.render('user', {username});
})

app.get('/logout',(req,res) => {
    req.session.destroy();
    res.redirect('/');
});

var obj = {};

app.get('/', function(req,res){
    console.log("req.session")
    console.log(req.session)

    if (req.session.userid) {
        console.log(req.session.userid)
    }
    obj = {}
    if (req.session.userid)
        obj = {session: req.session.userid}
    res.render("index", obj)
});

app.get('/post', function(req,res){
    res.render('post')
 
 });


app.listen(process.env.PORT || 3000, function(){
   console.log('server, port 3000');
});

app.get('/logout',(req,res) => {
    req.session.destroy();
    res.redirect("/");
});

app.get('/search', function(req,res){
    console.log(req.session)
    if(req.session.userid){
        res.render('search')

    }else (
        res.redirect('login')
    )
    
 });

app.post('/search', async function(req, res){
   try{
    let sql = "SELECT * FROM donors WHERE " + req.body.searchBy + " LIKE '" + req.body.searchQuery + "'";
    console.log(sql);
    db.query(sql, function(err, results){
            if(err) {
            throw err;
        } else {
            console.log(results);
            console.log('Filtered content');
            obj = {data: results};
            res.render('results', obj);
        }
    });
}
    catch{
        res.render('search')
    }
});

app.post('/submitted', function(req,res){
    const fname = req.body.fname;
    const lname = req.body.lname;
    const pnummer = req.body.pnummer;
    const btype = req.body.btype;
    var bdis = "";
    if (hasNumber(fname) && hasNumber(lname)){
        res.redirect(req.get('referer'));
        // insert sleep(do nothing) 5 sec
        // redirect to register page

    }
    if(req.body.bdis == "on"){
        bdis = 1;
    } else {
        bdis = 0;
    }
   
   const sqlInstert = "INSERT INTO donors (fname, lname, pnummer, btype, bdis) VALUES (?, ?, ?, ?, ?);"
   
   db.query(sqlInstert, [fname, lname, pnummer, btype, bdis], (err, result)=> {
       if(err) {
           throw err;
       } else {
           res.render('sucess');
       }
   });

});

function hasNumber(myString) {
    return /\d/.test(myString);
  }
  