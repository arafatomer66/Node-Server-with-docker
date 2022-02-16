const express = require('express');
const mongoose = require('mongoose');
const { MONGO_USER,MONGO_PASSWORD,MONGO_PORT, MONGO_IP } = require('./config/config');


const app = express();

const url = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin` ;
mongoose.connect(url , {
    useNewUrlParser : true ,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(()=> {
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


// const connectWithRetry = () => {
//     mongoose.connect(url , {
//         useNewUrlParser : true ,
//         useUnifiedTopology: true,
//         useFindAndModify: false
//     }).then(()=> {
//         console.log('database connected');
//     }).catch((e) => {
//         console.log(e);
//         console.log('database not connected');
//         setTimeout(connectWithRetry , 5000);
//     });
// }