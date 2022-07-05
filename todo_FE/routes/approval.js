 const express = require('express');
 const path = require('path');

 const router = express.Router();

 // routing approval list
 router.get('/approvalList', function(req, res){
    const htmlFilePath = path.join(__dirname, '..', 'views', 'board', 'approval', 'Approval_List.html');
    res.sendFile(htmlFilePath);
})

// routing approval request page
router.get('/approvalRequest', function(req, res){
    const htmlFilePath = path.join(__dirname, '..', 'views', 'board', 'approval', 'Approval_Form.html');
    res.sendFile(htmlFilePath);
})

module.exports = router;