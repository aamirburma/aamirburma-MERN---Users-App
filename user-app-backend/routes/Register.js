const express = require('express')
const mongoose = require('mongoose');
const router = express.Router();

const loginModel = require("../model/login")

/** Register user */
router.post("/", (req, res) => {
    const newRegister = req.body;
    // return;
    loginModel.findOne({
        "email": newRegister.email
    }, (err, user) => {
        if (user) {
            res.send({ message: "User already registered" })
            console.log("This email ID is already exist")
        } else {
            loginModel.create(newRegister);
            res.send({ message: "User Registered successfully" })
            console.log("User Registered successfully");
        }
    })
})

module.exports = router