const express = require("express");
const path = require("path");
const db = require("../data/database");
// 비밀번호 해싱처리
const bcrpyt = require("bcryptjs");

const router = express.Router();

router.get("/login", function (req, res) {
  // const htmlFilePath = path.join(__dirname, '..', 'views', 'board', 'login.html');
  // res.sendFile(htmlFilePath);
  res.render("login");
});
router.get("/signup", function (req, res) {
  // const htmlFilePath = path.join(__dirname, '..', 'views', 'board', 'signup.html');
  // res.sendFile(htmlFilePath)

  res.render("signup");
});

/**
 * 회원가입
 * - id, pw, email 정보를 통해 회원가입하는 기능
 * - 비밀번호는 bcrypt 라이브러리를 이용해서 해싱처리
 */
router.post("/signup", async function (req, res) {
  // 중복 id 체크
  const userId = req.body.userid;

  const query = "SELECT * FROM Users WHERE userid = ?";
  const existingUserList = await db.query(query, [userId]);
  const existingUser = existingUserList[0];

  if (existingUser) {
    console.log("already exist id");

    res.redirect("/signup");
    return;
  }

  // 중복된 아이디가 아닐 경우 db에 회원정보 저장
  const data = [
    req.body.userid,
    await bcrpyt.hash(req.body.password, 12),
    // hashedPassword,
    req.body.username,
    req.body.email,
  ];
  await db.query(
    "INSERT INTO Users (userid, password, username, email) VALUES (?)",
    [data]
  );

  res.redirect("/");
});

// router.post("/login", function (req, res) {
//   res.render("login");
// });

/**
 * 로그인 처리
 */
router.post("/login", async function (req, res) {
  console.log("login");
  const userId = req.body.userid;
  const password = req.body.password;

  // 로그인 시 입력된 정보에 해당하는 회원정보를 가져온다
  const query = "SELECT * FROM Users WHERE userid = ?";
  const existingUserList = await db.query(query, [userId]);
  const existingUser = existingUserList[0];
  console.log(existingUser[0]);

  // 회원정보 존재여부 판단
  if (!existingUser > 0) {
    console.log("no users");
    return res.redirect("login");
  }

  // 해싱되지 않은 pw와 해싱된 pw를 비교
  console.log(existingUser[0].password);
  const passwordAreEqual = await bcrpyt.compare(
    password,
    existingUser[0].password
  );
  console.log("---");
  console.log(passwordAreEqual);

  if (!passwordAreEqual) {
    console.log("password is not equal");
    return res.redirect("login");
  }

  console.log("Success");

  req.session.user = {id: existingUser[0].userid, name: existingUser[0].username};
  req.session.isAuthenticated = true;

  // 세션 설정이 완료된 후 페이지 이동을 위해 redirect를 안에 넣음
  req.session.save(function(){
    res.redirect("/");
  });

});

// router.get("/", function (req, res) {
//   res.render("loginSuccess"); // 여기서 '/' 페이지를 loginsuccess로 연결해서 이제 '/' 주소의 default가 로그인성공 페이지로 연결되는듯?
// });

module.exports = router;
