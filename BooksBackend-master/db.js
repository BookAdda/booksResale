const mysql = require('mysql2')


var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'sql12246674',
});


// const con = mysql.createConnection({
    
//     host: 'localhost',
//     database: 'bookresale',
//     user: 'myusr',
//     password: 'mypass',
//     insecureAuth:true
// })


con.connect(function(err) {
    if (err) {
        console.log(err);
        throw err;
    }

    console.log('connected');
})

module.exports = con;