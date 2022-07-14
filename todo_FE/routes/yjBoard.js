const express = require("express");
const path = require("path");
const db = require("../data/database");

const router = express.Router();

// write 페이지에서 게시글 작성 post
router.post("/yjBoard/write", async function (req, res) {
  const data = [req.body.boardTitle, req.body.boardContent];
  await db.query("INSERT INTO yjBoard (boardTitle, boardContent) VALUES (?)", [
    data,
  ]);
  res.redirect("/yjBoard"); // 여기가 리스트 페이지
});

// yjboard 페이지에서 리스트 get

router.get("/yjBoard", async function (req, res) {
  const query = "SELECT id, boardTitle, boardContent FROM yjBoard";

  const [posts] = await db.query(query);
  res.render("YJ_Board", { posts: posts });
});

router.get("yjBoard/:id", async function (res, req) {
  const query = `
    SELECT id, boardTitle, boardContent from yjBoard
    WHERE yjBoard.id = ?
    `;
});

module.exports = router;
