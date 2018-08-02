var router=require('express').Router();
var booksSchema =require('../../model/books');
const port=process.env.PORT ||8000;

router.get('/:id',function (req,res) {
     var id=req.params.id;

    booksSchema.findOne({_id:id},function (err,data) {

        data.imgLink=`http://localhost:${port}`+ data.imgLink;
        res.json(data);

    })
})
module.exports=router;