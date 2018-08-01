const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');
var connection = require('./db.js');
const cors = require('cors');


app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-type,Accept,X-Access-Token,X-Key');
next();
});


// app.use('/public', express.static(__dirname + "/public"));
app.use('/', express.static(path.join(__dirname, '/public')));


app.listen(8000, () => {
  console.log('Server started!');
});

  
// app.get('/home',function(req,res){
//   res.send("It works");
// });

// select * from messages as m inner join users as u where (m.senderid = 1 and u.id=m.receiverid) or (m.receiverid = 1 and u.id=m.senderid);
//) or (m.receiverid = ${userid} and u.id=senderid)

app.get('/myrecmsgs',function(req,res){
  let userid = req.query.id;
  let query  = `select * from messages as m 
    inner join users as u 
    where m.receiverid = ${userid} 
    and u.id=m.senderid;`
  console.log(query);
  //let userid = req.session.id;
  
  connection.query(query, [userid] , function(error, result){
    //console.log(query);
    console.log(result);
    if(error){
      console.log(error);
      var obj = { status: 400, message: 'There is error in query!' };
      res.json(obj);
    } else if (result[0] == null) {
        console.log("No ");
        var obj = { status: 400, message: 'Oops ! .' };
        res.json(obj);
    } else {
        //console.log(result);
        //var obj = { status: 200, message: 'Successfull', data: result };
        var obj = result;
        res.json(obj); //Successfull
    }
  
  })
});


app.get('/mysentmsgs',function(req,res){
  let userid = req.query.id;
  let query  = `select * from messages as m 
    inner join users as u 
    where m.senderid = ${userid} 
    and u.id=m.receiverid;`
  console.log(query);
  //let userid = req.session.id;
  
  connection.query(query, [userid] , function(error, result){
    //console.log(query);
    console.log(result);
    if(error){
      console.log(error);
      var obj = { status: 400, message: 'There is error in query!' };
      res.json(obj);
    } else if (result[0] == null) {
        console.log("No ");
        var obj = { status: 400, message: 'Oops ! .' };
        res.json(obj);
    } else {
        //console.log(result);
        //var obj = { status: 200, message: 'Successfull', data: result };
        var obj = result;
        res.json(obj); //Successfull
    }
  
  })
});



app.post('/addmsg', function(req, res) {
  console.log(req.body);
  console.log(req.query)
  let data = Object.values(req.body);
  console.log(data);

  let query = `insert into messages 
    (senderid, receiverid, bookid, msg) 
    values (?,?,?,?);`
  console.log(query);

  connection.query(query, data, function(error, result){

    if(error){
      console.log(error);
    //      res.status(400);
    }
    else
    {  
      console.log(result);
    //      res.send("200");}
    }   
  })
 res.status(200).send({"message": "Data received"});
});




//select * from listings as l inner join books as b on l.bookid = b.id where l.userid = '1';

app.get('/mylistdata',function(req,res){
  let userid = req.query.id;
  let query  = `select * from books  
    where userid = ${userid};`
  console.log(query);
  //let userid = req.session.id;
  
  connection.query(query, [userid] , function(error, result){
    //console.log(query);
    console.log(result);
    if(error){
      console.log(error);
      var obj = { status: 400, message: 'There is error in query!' };
      res.json(obj);
    } else if (result[0] == null) {
        console.log("No ");
        var obj = { status: 400, message: 'Oops ! .' };
        res.json(obj);
    } else {
        //console.log(result);
        //var obj = { status: 200, message: 'Successfull', data: result };
        var obj = result;
        res.json(obj); //Successfull
    }
  
  })
});



app.get('/wishlistdata',function(req,res){
  let userid = req.query.id;
  let query  = `select * from books as b 
    inner join wishlist as w 
    on w.bookid = b.id 
    where w.userid = ${userid};`
  console.log(query);
  //let userid = req.session.id;
  
  connection.query(query, [userid] , function(error, result){
    //console.log(query);
    console.log(result);
    if(error){
      console.log(error);
      var obj = { status: 400, message: 'There is error in query!' };
      res.json(obj);
    } else if (result[0] == null) {
        console.log("No ");
        var obj = { status: 400, message: 'Oops ! .' };
        res.json(obj);
    } else {
        //console.log(result);
        //var obj = { status: 200, message: 'Successfull', data: result };
        var obj = result;
        res.json(obj); //Successfull
    }
  
  })
});



app.post('/addwish', function(req, res) {
  console.log(req.body);
  console.log(req.query)
  let data = Object.values(req.body);
  console.log(data);

  let query = `insert into wishlist  
    (userid, bookid) values (?,?);`
  console.log(query);

  connection.query(query, data, function(error, result){

    if(error){
      console.log(error);
    //      res.status(400);
    }
    else
    {  
      console.log(result);
    //      res.send("200");}
    }   
  })
 res.status(200).send({"message": "Data received"});
});



app.get('/fetch',function(req,res){
  //  res.json("Yes");
    // let email = req.param('email');
    // let password = req.param('pasword');
    let email = req.query.email;
    let password = req.query.password;
    let query = `select * from users 
    where users.email ='${email}'
    and users.password = '${password}';`
  
    console.log(query);
    connection.query(query, function(error, result){
      console.log(result);
      if(error){
        console.log(error);
        var obj = { status: 400, message: 'There is error in query!' };
        res.json(obj);
      } else if (result[0] == null) {
          console.log("No ");
          console.log(result[0]);
          var obj = { status: 400, message: 'Oops ! .' };
          res.json(obj);
      } else {
          var obj = result;
          res.json(obj);
      }
    })
  });
  



app.get('/detail',function(req,res){
//  res.json("Yes");
  let id = req.query.id;
//  let query  = `select * from books where id=${id};`

  let query = `select * from books as b 
    inner join users as u 
    on u.id = b.userid 
    where b.bookid = ${id};`


  console.log(query);
  connection.query(query, function(error, result){
    console.log(result);
    if(error){
      console.log(error);
      var obj = { status: 400, message: 'There is error in query!' };
      res.json(obj);
    } else if (result[0] == null) {
        console.log("No ");
        var obj = { status: 400, message: 'Oops ! .' };
        res.json(obj);
    } else {
        var obj = result;
        res.json(obj);
    }
  })
});



app.get('/listingsdata',function(req,res){
  let query  = `select * from books;`
  console.log(query);
  connection.query(query, function(error, result){
    console.log(result);
    if(error){
      console.log(error);
      var obj = { status: 400, message: 'There is error in query!' };
      res.json(obj);
    } else if (result[0] == null) {
        console.log("No ");
        var obj = { status: 400, message: 'Oops ! .' };
        res.json(obj);
    } else {
        //console.log(result);
        //var obj = { status: 200, message: 'Successfull', data: result };
        var obj = result;
        res.json(obj); //Successfull
    }
  })
});

app.post('/addbook', function(req, res) {
  console.log(req.body);
  let data = Object.values(req.body);
  console.log(data);
  let query = `insert into books 
    (userid, bname, author, image, price, cndition) 
    values (?,?,?,?,?,?);`
  console.log(query);
  
  connection.query(query, data, function(error, result){
  //  console.log(result.changedRows + "rows affected");
    if(error){
      console.log(error);
//      res.status(400);
    }
    else
    {  
      console.log(result);
//      res.send("200");}
    }   
//    res.status(200).send({"message": "Data received"});
  });

app.post('/adduser', function(req, res) {
  console.log(req.body);
  let data = Object.values(req.body);
  console.log(data);

  let query = `insert into users 
    (name, email, password, address, contact) 
    values (?,?,?,?,?);`
  console.log(query);
  connection.query(query, data, function(error, result){

    if(error){
      console.log(error);
    //      res.status(400);
    }
    else
    {  
      console.log(result);
    //      res.send("200");}
    }   
  })
//  res.status(200).send({"message": "Data received"});
});




// app.get('/detail', function(req, res){
//   let no = req.query.id;
//   let url = "localhost:8000/detail/"+no;
//   request(url, function(error, response, body){
//     if(!error && response.statusCode==200){
//       let data = JSON.parse(body)
//       res.json(data);
//     }  
//   });
// });
// })

});