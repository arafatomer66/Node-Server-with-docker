const User = require("../models/userModel");
const bcrypt = require("bcryptjs");


exports.signUp = async (req, res ) => {

    const {username , password} = req.body;
    try {
    const hashpassword = await bcrypt.hash(password ,12);
        const user = await User.create({
            username : username ,
            password : hashpassword
        });
        // req.session.user = user ;
    res.status(200).json({
        data : {
            user
        }
    });
    } catch (error) {
        res.status(400).json({
            status: "failed",
        });
        console.log(error);
    }
}

exports.signIn = async (req, res , next) => {
    const {username , password} = req.body;
    try {
        const user = await User.findOne({username});

        if(!user) {
            return res.status(400).json({
                status: "Not found",
            });
        };
        const isCorrect = bcrypt.compare(password , user.password);


        if(isCorrect) {
            // req.session.user = user ;
            res.status(200).json({
                status: "success",
            });
        } else {
            res.status(400).json({
                status: "not correct",
            });
        }
    } catch (error) {
        res.status(400).json({
            status: "failed",
        });
        console.log(error);
    }
}

