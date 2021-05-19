const mongoose = require("mongoose") ;
const Schema = mongoose.Schema ;

const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;

const CONTACT_PATTERN = /\d{3}-\d{3}-\d{4}/ ;

const userSchema  = new Schema({
    
    username : {
        type : String ,
        minlength : [4 , "Minimum 4 characters required !!!"]   
    } , 
    email : {
        type : String ,
        minlength : [4 , "Minimum 4 characters required !!!"] , 
        maxlength : [32,"Invalid length !! Max Allowed : 32 "] ,
        unique : true ,
        lowercase : true ,
        required : "Email is Required !!" ,
        match : EMAIL_PATTERN 
    } , 
   
    contact : {
        type : String ,
        required : "Contact Number is required !!" ,
        match : [CONTACT_PATTERN , "Pattern should be DDD-DDD-DDDD "]
    } ,

    image: { type : String ,  default : "http://via.placeholder.com/350x250"},

   
 }) ;

 module.exports = mongoose.model("User",userSchema) ;