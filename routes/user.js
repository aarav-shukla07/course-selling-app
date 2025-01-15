const { Router } = require("express");

const userRouter = Router();

userRouter.post("/signup", function (req, res) {
    res.json({
        message: "sigup endpoint"
    })
})

userRouter.post("/signin", function (req, res) {
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