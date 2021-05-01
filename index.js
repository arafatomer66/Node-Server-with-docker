const express = require('express');
const mongoose = require('mongoose');
const { MONGO_USER,MONGO_PASSWORD,MONGO_PORT, MONGO_IP,SESSION_SECRET } = require('./config/config');
const postRouter = require("./routes/postRoutes");
const userRouter = require("./routes/userRoutes");
const app = express();
const session = require("express-session");
const redis = require("redis");
// let RedisStore = require("connect-redis")(session);
// let redisClient = redis.createClient({
//     host: "redis",
//     port:6379
// });


// redisClient.on("error", function (err) {
//     console.log("Error " + err);
// });


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

app.enable("trust proxy");
// app.use(session({
//     store: new RedisStore({client : redisClient}),
//     secret:SESSION_SECRET,
//     cookie: {
//         secure:false,
//         resave: false,
//         maxAge:30000,
//         httpOnly:true,
//         saveUninitialized:false
//     }
// }
// ));
app.use(express.json());

app.get("/" , (req,res) => {
    res.json({
        "Message" : "App is on air , enjoy !!!!!"
    });
});

app.use("/posts" , postRouter);
app.use("/users" , userRouter);

app.listen(port , () => {
    console.log(`Server is running in ${port} port....`);
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