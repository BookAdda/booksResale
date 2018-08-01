
var router=require('express').Router();
var userSchema=require('../../model/user');
router.get('/:username',function (req,res) {

    var username=req.params.username;

    userSchema.find({username:username},{name:1,booksOnsale:1})
        .exec(function (data) {
            res.JSON(data);
        })



})

router.get(':username/dashboard',function (req,res) {
    var username=req.params.username;
    userSchema.find({username:username},function (data) {   //auth to be checked
        res.JSON(data);
    })
})

module.exports=router;