// import express package
const express = require('express');

// import path
const path = require('path');

// apply express
const app = express();

// css, js 파일을 사용하기 위해 세팅
app.use(express.static('public'));

// routing root page
app.get('/', function (req, res) {
    // 이동하려는 file이 있는 경로 세팅
    const htmlFilePath = path.join(__dirname, 'views', 'index.html');
    res.sendFile(htmlFilePath);
})

// routing HJBoard page
app.get('/hjBoard', function (req, res) {
    const htmlFilePath = path.join(__dirname, 'views', 'board', 'HJ_Board.html');
    console.log(__dirname);
    res.sendFile(htmlFilePath);
})

// routing YJBoard page

// setting port
app.listen(3001);