// import express package
const express = require('express');

// import path
const path = require('path');

// apply express
const app = express();

//parsing req.body
app.use(express.urlencoded({ extended: true }));


// routes Approval
const approvalRoutes = require('./routes/approval');

// routes Login 
const loginRoutes = require('./routes/user');

app.use(loginRoutes);

// css, js 파일을 사용하기 위해 세팅
app.use(express.static('public'));


// 폴더 구조 설정
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 결재 라우팅 설정 가져오기
app.use(approvalRoutes);



// routing root page
app.get('/', function (req, res) {
	// 이동하려는 file이 있는 경로 세팅
	// const htmlFilePath = path.join(__dirname, 'views', 'index.html');
	// res.sendFile(htmlFilePath);
	res.render('index');
})

// routing HJBoard page
app.get('/hjBoard', function (req, res) {
	const htmlFilePath = path.join(__dirname, 'views', 'board', 'HJ_Board.html');
	console.log(__dirname);
	res.sendFile(htmlFilePath);
})

// routing YJBoard page
app.get('/yjBoard', function (req, res) {
	const htmlFilePath = path.join(__dirname, 'views', 'board', 'YJ_Board.html')
	res.sendFile(htmlFilePath)
})


// setting port
app.listen(3001);
