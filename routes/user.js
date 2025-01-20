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

    const user = await userModel.find({
        email: email,
        password: password
    });

    res.json({
        message: "signin endpoint"
    })
})

userRouter.post("/purchases", function (req, res) {
    res.json({
        message: "user courses endpoint"
    })
})

module.exports = {
    userRouter: userRouter
}