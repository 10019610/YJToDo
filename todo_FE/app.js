


// import express package
const express = require('express');

// apply express
const app = express();

// import path
const path = require('path');

// css, js 파일을 사용하기 위해 세팅
app.use(express.static('public'));

// routes Approval
const approvalRoutes = require('./routes/approval');

// 폴더 구조 설정
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//parsing req.body
app.use(express.urlencoded({ extended: true }));

// routes Login 
const loginRoutes = require('./routes/user');
//parsing req.body
app.use(express.urlencoded({ extended: true }));

app.use(loginRoutes);

// import express-session 
const session = require('express-session');

const MySQLStore = require('express-mysql-session')(session);

const options = {
	host: "144.24.68.69",
	port: 3306,
	user: "yang",
	password: "Rlagus12!@",
	database: "testdb",
};

const sessionStore = new MySQLStore(options);

app.use(session({
	secret: 'super-secret',
	resave: false,
	saveUninitialized: true,
	store: sessionStore,
}));


// routes Approval
const approvalRoutes = require('./routes/approval');





// 결재 라우팅 설정 가져오기
app.use('/approval', approvalRoutes);


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
