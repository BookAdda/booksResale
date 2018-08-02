var router=require('express').Router();
var booksSchema =require('../../model/books');
const port=process.env.PORT || 8000;

router.get('/',function (req,res) {

    booksSchema.find({},function (err,data) {

        for(var i=0;i<data.length;i++)
        {
            console.log(data[i].imgLink)
            data[i].imgLink=`http://localhost:${port}` +  data[i].imgLink;
        }

        res.json(data);

    })
})
module.exports=router;