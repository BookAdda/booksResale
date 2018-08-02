var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var booksSchema = new Schema({


    name:{
        type:String,
        required:true
    },

    writer:
        {
            type:String,
            required:true
        },

    sellingPrice:
        {
            type:Number,
            required:true
        },
    category:
        {
            type:String,
            required:true
        },
    description:
        {
            type:String
        },
    imgLink:
        {
            type:String
        }
})

module.exports=mongoose.model('booksSchema', booksSchema);