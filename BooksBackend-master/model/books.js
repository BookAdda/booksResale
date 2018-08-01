var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var booksSchema = new Schema({


    name:{
        type:string,
        required:true
    },

    writer:
        {
            type:string,
            required:true
        },

    sellingPrice:
        {
            type:string,
            required:true
        },
    category:
        {
            type:string,
            required:true
        },
    description:
        {
            type:string,
            required:true
        },
    imgsLink:
        {
            type:array
        }
})