const express = require("express");

const app = express();

app.post("/user/signup", function(req,res){
    res.json({
        message:"sigup endpoint"
    })
})

app.post("/user/signin", function(req,res){
    res.json({
        message:"signin endpoint"
    })
})

app.post("/user/purchase", function(req,res){
    res.json({
        message:"course purchase endpoint"
    })
})

app.post("/user/purchases", function(req,res){
    res.json({
        message:"user courses endpoint"
    })
})

app.get("/courses", function(req, res){
    res.json({
        message:"course endpoint"
    })
})

app.listen(3000);