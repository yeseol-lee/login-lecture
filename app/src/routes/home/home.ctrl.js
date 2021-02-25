"use strict";
//라우팅되서 온걸 무언가 실행시켜줌.

const home = (req, res) => {
    res.render("home/index");
};

const login = (req, res) => {
    res.render("home/login");
};


module.exports = {
    home,
    login,
};
