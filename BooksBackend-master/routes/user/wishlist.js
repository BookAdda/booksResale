
var router=require('express').Router();
var booksSchema = require('../../model/books');
var userSchema=require('../../model/user');
var verifyToken=require('../auth/verifyToken');


router.post('/showWishList',verifyToken,function (req,res) {

    var userId=req.userId;

    userSchema.findById(userId,function (err,result) {
        res.json(result.wishlist);
    })
})

router.post('/addToWishlist',verifyToken,function (req,res) {
console.log("add to wishlist:", req.body.id);
    var bookId = req.body.id;
    var userId=req.userId;

    console.log(bookId)
    booksSchema.findById(bookId)
        .exec(function (err,data) {
            //console.log(data);
            userSchema.findByIdAndUpdate(req.userId,{$addToSet:{ wishlist: data}})
                .exec(function (err,user) {
                    res.sendStatus(200);
                })
        })
})

router.post('/removeFromWishlist',verifyToken,function (req,res) {
    var userId=req.userId;
    var id = req.body.id;
userSchema.findOneAndUpdate({_id:userId}, { $pull:{ wishlist:{ _id: id }}})
    .exec(function (err,data) {
        // console.log(data);
        // res.send(data);
        res.sendStatus(200);
    })

    })



module.exports=router;