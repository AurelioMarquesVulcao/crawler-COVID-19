const express = require('express');
const mongoose = require('mongoose');
const user = require('../db/User')
const route = express.Router();

route.post('/', async (req,res) => {
    const { country, cases, death} = req.body;
    let user = {};
    user.country = country;
    user.cases = cases;
    user.death = death;
    let userModel = new User(user);
    await userModel.save();
    res.json(userModel);
});


module.exports = route;