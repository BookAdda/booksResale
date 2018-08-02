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
            type: Array
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

userSchema.index({username:1}, {unique:true})
module.exports=mongoose.model('userSchema',userSchema);