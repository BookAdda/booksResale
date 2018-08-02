
var router=require('express').Router();
var booksSchema = require('../../model/books');
var userSchema=require('../../model/user');

router.post('/showWishList',function (req,res) {
    var username=req.body.username;
userSchema.findOneAndUpdate({username:username})
    .exec(function (err,data) {
        var wishlist=data.wishlist;
        res.json(wishlist);

    })
})

router.post('/addToWishlist',function (req,res) {
console.log("add to wishlist");
    var username=req.body.username;
    var bookId = req.body.id;
    console.log(bookId)
    booksSchema.findById(bookId)
        .exec(function (err,data) {
            //console.log(data);
            userSchema.findOneAndUpdate({username:username},{$addToSet:{ wishlist: data}})
                .exec(function (err,user) {

                    //console.log(user)

                   // res.json(user);

                    res.sendStatus(200);
                })
        })
})

router.post('/removeFromWishlist',function (req,res) {
    var username=req.body.username;
    var id = req.body.id;
userSchema.findOneAndUpdate({username:username}, { $pull:{ wishlist:{ writer: 'dsasad' }}})
    .exec(function (err,data) {
        console.log(data);
        res.send(data);
    })

    })



module.exports=router;