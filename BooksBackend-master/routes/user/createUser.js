var router=require('express').Router();
var userSchema= require('../../model/user');

router.get('/register',function (req,res) {
    console.log(req.body);
    newUser = new userSchema(
            {
                name:req.body.name,
                username:req.body.username,
                password:req.body.password,
                phoneNumber:req.body.phoneNumber


            }

    )
    newUser.save().then((userdata)=>
    {
        console.log('created:', userdata);
        res.send(200);

    });
})