const { Router } = require("express");
const { userModel } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "hadijdfug"; 


const userRouter = Router();

userRouter.post("/signup", async function (req, res) {
    const { email, password, firstName, lastName } = req.body; //TODO: adding zod validation
    //TODO: hash the password in the plaintext pw is not stored in the DB


    try {
        await userModel.create({
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        })
    } catch (e) {
        console.error(e);
        res.status(500).json({
            message: "signup failed"
        })
        return;
    }

    res.json({
        message: "sigup Succeeded"
    })
})

userRouter.post("/signin", async function (req, res) {
    const { email, password } = req.body;

    //TODO: ideally the password should be hashed, and hence you can't compare the user provided password and the database password 
    const user = await userModel.findOne({
        email: email,
        password: password
    });

    if (user) {
        const token = jwt.sign ({
            id: user._id
        }, JWT_USER_PASSWORD)
        //Do cookie logic here

        res.json({
            token :token
        })

    }else{
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }

    
})

userRouter.post("/purchases", function (req, res) {
    res.json({
        message: "user courses endpoint"
    })
})

module.exports = {
    userRouter: userRouter
}