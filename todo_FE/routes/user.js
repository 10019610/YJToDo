const express = require('express');
const path = require('path');
const db = require("../data/database");

const router = express.Router();

router.get('/login', (req, res) => {
	const htmlFilePath = path.join(__dirname, '..', 'views', 'board', 'login.html');
	res.sendFile(htmlFilePath);
})
router.get('/signup', (req, res) => {
	const htmlFilePath = path.join(__dirname, '..', 'views', 'board', 'signup.html');
	res.sendFile(htmlFilePath)
})

router.post("/login", function (req, res) {
	const data = [
		req.body.id,
		req.body.username,
		req.body.password,
		req.body.email,
	]
	db.query(
		"INSERT INTO ..............."
	)
})

module.exports = router;