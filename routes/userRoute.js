const express = require('express');
const userModel = require("../model/userModel");

const router = express.Router();

router.post("/login", async (req, res) => {
    try {
        const user = await userModel.findOne({ userId: req.body.userId, password: req.body.password, verified: true })

        if (user) {
            res.send(user)
        }
        else {
            res.send(400).json(error)
        }
    }
    catch (error) {
        res.send(400).json(error)
    }
});

router.post("/register", async (req, res) => {
    try {
        const userData = req.body;
        const newUser = new userModel({ ...userData, verified: false })
        await newUser.save()
        res.send('User Data add successfully')
    } catch (error) {
        res.status(400).json(error);
    }
});





module.exports = router;