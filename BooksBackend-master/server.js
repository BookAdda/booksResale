const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
var createUser  = require('./routes/user/createUser');
var profile = require('./routes/user/dashboard');
var listBookCard =require('./routes/listBooks/listBookCard')
var listBookAll = require('./routes/listBooks/listBookAll');
var singleBook = require('./routes/listBooks/singleBook');
var uploadBook=require('./routes/uploadBooks/uploadBook');
var listBookCategory= require('./routes/listBooks/listBookCategory');
var wishlist=require('./routes/user/wishlist');
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/booksAdda');
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/', express.static(path.join(__dirname, '/public')));

// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-type,Accept,X-Access-Token,X-Key');
// next();
// });

//routing
app.use('/api/createUser',createUser);
app.use('/api/profile',profile);
app.use('/api/listBookAll',listBookAll);
app.use('/api/listBookCategory',listBookCategory);
app.use('/api/listBookCard',listBookCard);
app.use('/api/singleBook',singleBook);
app.use('/api/uploadBook',uploadBook);
app.use('/api/wishlist',wishlist);


app.listen(8000, () => {
  console.log('Server started! at 8000');
});


