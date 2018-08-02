var router=require('express').Router();
var booksSchema =require('../../model/books');
const port=process.env.PORT || 8000;


router.get('/:category',function (req,res) {

    var category= req.params.category;

    booksSchema.find({category:category})
        .exec(function (err,data) {
            res.json(data);
        })

})

module.exports=router;