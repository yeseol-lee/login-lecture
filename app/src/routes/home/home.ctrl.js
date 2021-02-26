"use strict";
const User = require("../../models/User");
//라우팅되서 온걸 무언가 실행시켜줌.

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    },

    register: (req, res) => {
        res.render("home/register");
    }
}


const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
    },
}

module.exports = {
    output,
    process,
};


