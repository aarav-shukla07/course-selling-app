const { Router } = require("express");

const userRouter = Router();

userRouter("/signup", function (req, res) {
    res.json({
        message: "sigup endpoint"
    })
})

userRouter("/signin", function (req, res) {
    res.json({
        message: "signin endpoint"
    })
})

userRouter("/purchases", function (req, res) {
    res.json({
        message: "user courses endpoint"
    })
})

module.exports = {
    userRouter: userRouter
}