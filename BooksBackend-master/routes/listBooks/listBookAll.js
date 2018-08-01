var router=require('express').Router();
var booksSchema =require('../../model/books');
const port=process.env.PORT ||portDev.port;

router.get('/',function () {

    booksSchema.find({},function (data) {

        for(var i=0;i<data.length;i++)
        {
            data[i].imgLink=`http://localhost:${port}`+ data[i].imgLink;
        }

        res.JSON(data);

    })
})
module.exports=router;