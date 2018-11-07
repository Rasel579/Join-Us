var faker = require("faker");
var mysql = require("mysql");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");



//use ejs
app.set('view engine', 'ejs');
//use body-parser
app.use(bodyParser.urlencoded({extended: true}));
//Using external css directory with files /public
app.use(express.static(__dirname + '/public'));

// Connection to database
var connection = mysql.createConnection({
    host :  "localhost",
    user :  "rasel579",
    database: "joinus"
});


// Route GET
app.get('/', function(req, res){
    //SELECTING DATA from DB
        var q = 'SELECT COUNT(*) as total FROM users';
        connection.query(q, function(error, results, fields){
            if (error) throw error;
            var total = results[0].total;
            // res.send('We have ' + total + ' users in our DB');
            res.render('home', {data: total});
                                });
       
});

app.post('/register', function(req, res){
     var person = {email: req.body.email};
     connection.query('INSERT INTO users SET ?', person, function(error, results, fields){
                        if (error) throw error;
                        console.log(results);
                        res.redirect('/');
                        });
    
        });

app.listen(process.env.PORT, function() {
    // body...
    console.log('Server started at port is ' + process.env.PORT);
});

// console.log(faker.address.city());
// console.log(faker.address.streetAddress());
// console.log(faker.address.city());



//INSERTING DATA
// var person = {email: faker.internet.email(),
//               created_at: faker.date.past()
//                             };
// connection.query('INSERT INTO users SET ?', person, function(error, results, fields){
//     if (error) throw error;
//     console.log(results);
// });

//INSERTING LOTS OF DATA
// var data = [];
// for(let i = 0; i < 500; i++){
//     data.push([
//              faker.internet.email(),
//              faker.date.past()
//         ]);
// }

// var q = 'INSERT INTO users (email, created_at) VALUES ?';

// connection.query(q, [data], function(err, result){
//     if (err) throw err;
//     console.log(data);
// });

// connection.end();
// function generateAddress(){
    
// console.log(faker.internet.email());
// console.log(faker.address.streetAddress());
// console.log(faker.address.city());
// };

// generateAddress();