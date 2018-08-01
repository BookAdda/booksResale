var router=require('express').Router();
var booksSchema =require('../../model/books');
const port=process.env.PORT ||portDev.port;
router.get('/',function (req,res) {

    var loveCardData=[];
    var scienceCardData=[];
    var  autobiographyCardData=[];
    var mysteryCardData=[];
    var totalData=[];

    var promise1Love= new Promise(function (resolve,reject) {
        booksSchema.find({category:'love'}).limit(4)
            .exec(function (err,result) {
                if(err)
                {
                    reject('error');
                }

                else{
                    loveCardData=result;
                    resolve();
                }

            })
    })

    var promise2science= new Promise(function (resolve,reject) {
        booksSchema.find({category:'science'}).limit(4)
            .exec(function (err,result) {
                if(err)
                {
                    reject('error');
                }

                else{
                    scienceCardData=result;
                    resolve();
                }

            })
    })

    var promise3autobiography= new Promise(function (resolve,reject) {
        booksSchema.find({category:'autobiography'}).limit(4)
            .exec(function (err,result) {
                if(err)
                {
                    reject('error');
                }

                else{
                    autobiographyCardData=result;
                    resolve();
                }

            })
    });
    var promise4mystery= new Promise(function (resolve,reject) {
        booksSchema.find({category:'mystery'}).limit(4)
            .exec(function (err,result) {
                if(err)
                {
                    reject('error');
                }

                else{
                    mysteryCardData=result;
                    resolve();
                }

            })
    });
    Promise.all([promise1Love,promise2science,promise3autobiography,promise4mystery])
        .then(function () {

            totalData=totalData.concat(loveCardData);
            totalData=totalData.concat(scienceCardData);
            totalData=totalData.concat(autobiographyCardData);
            totalData=totalData.concat(mysteryCardData);
            for(var i=0;i<totalData.length;i++)
            {
                totalData[i].imgLink = `http://localhost:${port}`+ totalData[i].imgLink;
            }
            res.json(totalData)
        })







})

module.exports=router;
