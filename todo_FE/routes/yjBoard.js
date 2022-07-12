const express = require("express");
const path = require("path");
const db = require("../data/database");

const router = express.Router();

// write 페이지에서 게시글 작성 post
router.post("/yjBoard/write", async function (req, res) {
  const data = [
    req.body.boardTitle,
    req.body.boardContent,
    req.body.createUserId,
  ];
  await db.query(
    "INSERT INTO yjBoard (boardTitle, boardContent, createUserId) VALUES (?)",
    [data]
  );
  res.redirect("/yjBoard"); // 여기가 리스트 페이지
});

// yjboard 페이지에서 리스트 get

// router.get("/yjBoard", async function (req, res) {
//   //   "SELECT boardTitle, boardContent, createUserId FROM yjBoard";
// });

module.exports = router;
