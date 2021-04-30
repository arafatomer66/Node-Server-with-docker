const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://omerarafat:omerarafat@mongo:27017/?authSource=admin').then(()=> {
    console.log('database connected');
}).catch((e) => {
    console.log(e);
    console.log('database not connected');
});

const port = process.env.PORT || 3000 ;

app.listen(port , () => {
    console.log(`Server is running in ${port} port....`);
});


app.get("/" , (req,res) => {
    res.json({
        "Message" : "App is on air , enjoy !!!!!"
    });
});