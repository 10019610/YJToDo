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

// view detail
router.get("/yjBoard/:id", async function (req, res) {
  console.log(req.params);
  const query = `
    SELECT * from yjBoard
    WHERE yjBoard.id = ?
    `;
  console.log(req.params);
  console.log(query);

  const [posts] = await db.query(query, [req.params.id]);
  console.log(posts);

  if (!posts || posts.length === 0) {
    console.log('geed?')
    return res.statusCode(404).render("404");
  }
  res.render("boardDetail", { post: posts[0] });
});

// 게시글 리스트의 edit 기능
router.get("/yjBoard/:id/edit", async function (req, res) {
  const query = `
   SELECT * FROM yjBoard WHERE id = ?
  `;
  const [posts] = await db.query(query, [req.params.id]);

  if (!posts || posts.length === 0) {
    return res.status(404).render("404");
  }

  res.render("boardEdit", { post: posts[0] });
});

router.post("/yjBoard/:id/edit", async function (req, res) {
  const query =
    "UPDATE yjBoard SET boardTitle = ?, boardContent = ? WHERE id = ?";
  await db.query(query, [
    req.body.boardTitle,
    req.body.boardContent,
    req.params.id,
  ]);
  res.redirect("/yjBoard");
});

// 게시글 리스트의 delete
router.post("/yjBoard/:id/delete", async function (req, res) {
  await db.query("DELETE FROM yjBoard WHERE id = ?", [req.params.id]);
  res.redirect("/yjBoard");
});

module.exports = router;
