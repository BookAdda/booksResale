var router=require('express').Router();
var booksSchema=require('../../model/books');
var userSchema = require('../../model/user');
var path = require('path');
var multer = require('multer');
var verifyToken=require('../auth/verifyToken');
    let filePathMulter;
    var storage = multer.diskStorage({
        destination: (req, file, cb) =>
            {


                cb(null, __dirname + '../../../public/images');


            },
        filename: (req, file, cb) => {

            filePathMulter= "img_" + Date.now() + path.extname(file.originalname);

            cb(null, filePathMulter)
        }
    });

    var upload = multer({storage: storage});


///////////////////////////////////////   ROUTING FOR MULTER CONTENT /////////////////////////////


    router.post('/',upload.single('avatar'),verifyToken,function (req,res,next) {
        console.log("hello from upload data api" )
        console.log(req.body)

        var name=req.body.name;
        var sellingPrice=req.body.sellingPrice;
        var description=req.body.description;
        var category=req.body.category;
        var writer=req.body.writer;

        let pathOfFile='/images/' + filePathMulter;
console.log(pathOfFile)
            let newBook = new booksSchema({
                    name:name,
                    sellingPrice:sellingPrice,
                    writer:writer,
                    description:description,
                    category:category,
                    imgLink: pathOfFile
                })

            newBook.save().then(()=>
            {
                console.log(newBook);

                //for testing username "pero"  , after it had to be changed with authToken

                userSchema.findOneAndUpdate({ username:'pero' },{ $push:{booksOnSale:newBook}},function (err,data) {
                    if (err) {
                        res.json({"error": true});
                    } else {
                        res.sendStatus(200)

                    }
                });


            })
        });


module.exports=router;