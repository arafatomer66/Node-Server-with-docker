const express = require('express');

const app = express();

const port = process.env.PORT || 3000 ;

app.listen(port , () => {
    console.log('Server is running ....');
});


app.get("/" , (req,res) => {
    res.json({
        "Message" : "App is on air"
    });
});