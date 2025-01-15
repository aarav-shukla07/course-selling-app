const { Router } = require("express");
const adminRouter = Router();

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

userRouter.post("/course", function (req, res) {
    res.json({
        message: "signin endpoint"
    })
})

userRouter.put("/course", function (req, res) {
    res.json({
        message: "signin endpoint"
    })
})

userRouter.get("/course/bulk", function (req, res) {
    res.json({
        message: "signin endpoint"
    })
})

module.exports = {
    adminRouter: adminRouter
}