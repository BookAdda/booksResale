var router=require('express').Router();
var booksSchema =require('../../model/books');
const port=process.env.PORT ||8000;

router.get('/book/:id',function () {
     var id=req.params.id;

    booksSchema.find({_id:id},function (data) {

        data[i].imgLink=`http://localhost:${port}`+ data[i].imgLink;
        res.JSON(data);

    })
})
module.exports=router;