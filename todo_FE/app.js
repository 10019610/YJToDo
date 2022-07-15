// import express package
const express = require("express");

// session package
const session = require('express-session');
const mysqlSession = require('express-mysql-session')(session);

// apply express
const app = express();

// import path
const path = require("path");

const options = {
  host: '144.24.68.69',
  port: 3306,
  user: 'yang',
  password: 'Rlagus12!@',
  database: 'testdb'
}

const sessionStore = new mysqlSession(options);

// css, js 파일을 사용하기 위해 세팅
app.use(express.static("public"));

// session
app.use(session({
  secret: 'super-secret',
  resave: false,
  saveUninitialized: false,
  store: sessionStore
}))

// routes
const approvalRoutes = require("./routes/approval");
const loginRoutes = require("./routes/user");
const yjBoardRoutes = require("./routes/yjBoard");

// 폴더 구조 설정
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//parsing req.body
app.use(express.urlencoded({ extended: true }));

//parsing req.body
app.use(express.urlencoded({ extended: true }));

app.use(loginRoutes);

app.use(yjBoardRoutes);
// 결재 라우팅 설정 가져오기
app.use("/approval", approvalRoutes);

// routing root page
app.get('/', function (req, res) {
  if(!req.session.isAuthenticated){
    return res.render('401');
  }

  res.render('index');
})

// routing HJBoard page
app.get("/hjBoard", function (req, res) {
  // const htmlFilePath = path.join(__dirname, "views", "board", "HJ_Board.html");
  // console.log(__dirname);
  // res.sendFile(htmlFilePath);
  res.render("HJ_Board");
});

// routing YJBoard page
app.get("/yjBoard", function (req, res) {
  res.render("YJ_Board");
});

// routing boardWrite page

app.get("/yjBoard/write", function (req, res) {
  res.render("boardWrite");
});

app.get("yjBoard/detail", function (req, res) {
  res.render("boardDetail");
});

// setting port
app.listen(3001);
