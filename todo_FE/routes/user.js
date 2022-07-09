const express = require('express');
const path = require('path');
const db = require("../data/database");

const router = express.Router();

router.get('/login', function (req, res) {
	// const htmlFilePath = path.join(__dirname, '..', 'views', 'board', 'login.html');
	// res.sendFile(htmlFilePath);
	res.render('login')
})
router.get('/signup', function (req, res) {
	// const htmlFilePath = path.join(__dirname, '..', 'views', 'board', 'signup.html');
	// res.sendFile(htmlFilePath)

	res.render('signup')
})

router.post("/signup", async function (req, res) {
	const data = [
		req.body.userid,
		req.body.password,
		req.body.username,
		req.body.email,
	];
	await db.query(
		"INSERT INTO Users (userid, password, username, email) VALUES (?)",
		[data]
	);
	res.redirect('/')
});

router.post('/login', function (req, res) {

});



module.exports = router;