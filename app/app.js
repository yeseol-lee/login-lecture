"use strict";

//모듈
const express = require('express');
const app = express();

//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

//정적 경로를 추가해줌. 자바스크립트 실행할수있게 해준다.
app.use(express.static(`${__dirname}/src/public`));

app.use("/", home); // use -> 미들웨어를 등록해주는 메서드

module.exports = app;

