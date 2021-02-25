"use strict";
//라우팅되서 온걸 무언가 실행시켜줌.

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    },
}

const process = {
    login: (req, res) => {
    //req.body를 보려면 app.js에 body-parse 모듈을 설치해야함.
        console.log(req.body);
    }
}

module.exports = {
    output,
    process,
};
