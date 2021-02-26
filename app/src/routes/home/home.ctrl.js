"use strict";
//라우팅되서 온걸 무언가 실행시켜줌.

const UserStorage = require("../../models/UserStorage");

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
    const id = req.body.id,
        psword = req.body.psword;

    const users = UserStorage.getUsers("id", "psword");
        const response = {};
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                response.success = true;
                //res: 프론트엔드로 응답..?
                return res.json(response);
            }
        }
        
        response.success = false;
        response.msg = "로그인에 실패하셨습니다.";
        return res.json(response);
    },
}

module.exports = {
    output,
    process,
};
