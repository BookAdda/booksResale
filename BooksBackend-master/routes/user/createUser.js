var router=require('express').Router();
var userSchema= require('../../model/user');

router.post('/register',function (req,res) {

    console.log(req.body);

    newUser = new userSchema(
            {
                name:req.body.name,
                username:req.body.username,
                password:req.body.password,
                phoneNumber:req.body.phoneNumber


            }

    )
    newUser.save(function (err,usernew) {
        if (err)
        {
res.json({'duplicateUsername': true})

        } else
            {
             console.log('newUser:' ,usernew);
             res.sendStatus(200)
          }
    })
})

module.exports=router;