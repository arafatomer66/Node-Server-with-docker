const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true , "Post Must Have title"]
    } ,
    body: {
        type: String,
        required : [true , "POst must have body"]
    }
});



const Post = mongoose.model("Post" , postSchema) ;

module.exports = Post ;