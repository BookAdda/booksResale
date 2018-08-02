
var router=require('express').Router();
var userSchema=require('../../model/user');
router.get('/:username',function (req,res) {

    var username=req.params.username;
    console.log(username)

    userSchema.findOne({username:username},{name:1,username:1,bookOnSale:1})
        .exec(function (err,data) {
            console.log(data)
            res.json(data);
        })



})

router.get('/:username/dashboard',function (req,res) {
    var username=req.params.username;
    userSchema.find({username:username},function (err,data) {   //auth to be checked
        res.json(data);
    })
})

module.exports=router;