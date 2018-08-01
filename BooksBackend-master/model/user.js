var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var userSchema= new Schema({
    name:
        {
            type:string,
            required:true
        },
    username: {
        type:string,
        required:true
    },

    booksOnSale:
        {
            type:string
        },
    password:
        {
            type:string,
            required:true
        },
    phoneNumber:
        {
          type:string,
          required:true
        },
    wishlist:
        {
           type:array
         }


})

module.exports=mongoose.model('userSchema',userSchema);