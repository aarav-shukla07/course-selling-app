const { Router } = require("express");
const courseRouter = Router();



courseRouter("/purchase", function (req, res) {
    res.json({
        message: "course purchase endpoint"
    })
})

courseRouter("/preview", function (req, res) {
    res.json({
        message: "course endpoint"
    })
})


module.exports = {
    courseRouter: courseRouter
}