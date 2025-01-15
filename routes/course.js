const { Router } = require("express");
const courseRouter = Router();



courseRouter.post("/purchase", function (req, res) {
    res.json({
        message: "course purchase endpoint"
    })
})

courseRouter.get("/preview", function (req, res) {
    res.json({
        message: "course endpoint"
    })
})


module.exports = {
    courseRouter: courseRouter
}