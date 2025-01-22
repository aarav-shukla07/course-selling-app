const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");

const jwt = require("jsonwebtoken");

adminRouter.post("/signup", async function (req, res) {

    const { email, password, firstName, lastName } = req.body; //TODO: adding zod validation
    //TODO: hash the password in the plaintext pw is not stored in the DB


    try {
        await adminModel.create({
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

adminRouter.post("/signin", async function (req, res) {
    const { email, password } = req.body;

    //TODO: ideally the password should be hashed, and hence you can't compare the admin provided password and the database password 
    const admin = await adminModel.findOne({
        email: email,
        password: password
    });

    if (admin) {
        const token = jwt.sign ({
            id: admin._id
        }, JWT_ADMIN_PASSWORD)
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

adminRouter.post("/course", function (req, res) {
    res.json({
        message: "signin endpoint"
    })
})

adminRouter.put("/course", function (req, res) {
    res.json({
        message: "signin endpoint"
    })
})

adminRouter.get("/course/bulk", function (req, res) {
    res.json({
        message: "signin endpoint"
    })
})

module.exports = {
    adminRouter: adminRouter
}