var router=require('express').Router();
var booksSchema =require('../../model/books');
const port=process.env.PORT || 8000;

router.get('/',function (req,res) {
console.log("hello")
    var loveCardData=[];
    var scienceCardData=[];
    var  autobiographyCardData=[];
    var mysteryCardData=[];

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
            var totalData=[];


            function addImgDomain(arr)  //adding domain to images, like localhost or so...
            {


                for (var i = 0; i < arr.length; i++)
                {
                    arr[i].imgLink =  `http://localhost:${port}`+ arr[i].imgLink;
                }
                return arr;
            }

            loveCardData= addImgDomain(loveCardData);
            scienceCardData=addImgDomain(scienceCardData);
            autobiographyCardData=addImgDomain(autobiographyCardData);
            mysteryCardData=addImgDomain(mysteryCardData);


            loveCardData = { 'love':loveCardData };
            scienceCardData = { 'science':scienceCardData };
            autobiographyCardData = { 'autobiography':autobiographyCardData };
            mysteryCardData = { 'mystery':mysteryCardData };

           totalData.push(loveCardData);
           totalData.push(scienceCardData);
           totalData.push(autobiographyCardData);
           totalData.push(mysteryCardData);


            res.json(totalData)
        })







})

module.exports=router;
