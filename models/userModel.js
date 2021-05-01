const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true , "User Must Have name"],
        unique : true
    } ,
    password: {
        type: String,
        required : [true , "User must have password"],
    }
});



const User = mongoose.model("User" , userSchema) ;

module.exports = User ;