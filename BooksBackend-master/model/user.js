var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var userSchema= new Schema({
    name:
        {
            type:String,
            required:true
        },
    username: {
        type:String,
        required:true
    },

    booksOnSale:
        {
            type:String
        },
    password:
        {
            type:String,
            required:true
        },
    phoneNumber:
        {
          type:String,
          required:true
        },
    wishlist:
        {
           type:Array
         }


})

module.exports=mongoose.model('userSchema',userSchema);