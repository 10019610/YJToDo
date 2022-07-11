const express = require('express');
const path = require('path');
const db = require('../data/database');

const router = express.Router();


// routing approval list
router.get('/approvalList', async function (req, res) {
    console.log(req.session);
    console.log(req);
    // const htmlFilePath = path.join(__dirname, '..', 'views', 'board', 'approval', 'Approval_List.html');

    const query = `
        SELECT *
        FROM Approval
    `
    const [approvals] = await db.query(query)

    res.render('board/approval/Approval_List', { approvals: approvals });
})

// routing approval request page
router.get('/approvalRequest', function (req, res) {
    // const htmlFilePath = path.join(__dirname, '..', 'views', 'board', 'approval', 'Approval_Form.ejs');
    // res.sendFile(htmlFilePath);
    res.render('board/approval/Approval_Form');
})

router.post('/approvalRequest', async function (req, res) {
    console.log(req.body);
    const data = [
        req.body.title,
        req.body.content
    ]

    const query = `
        INSERT INTO Approval
        (title, content)
        VALUES (?)
    `
    console.log(query);
    await db.query(query, [data]);

    res.redirect('approvalList');

})

module.exports = router;