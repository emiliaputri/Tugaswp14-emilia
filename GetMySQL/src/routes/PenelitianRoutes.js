const express = require('express');
const router = express.Router();
const penelitianController = require('../controllers/penelitianController');

router.get('/penelitian', penelitianController.getPenelitian);
router.post('/penelitian/insert', penelitianController.insertPenelitian);
router.put('/penelitian/update/:id', penelitianController.updatePenelitian);
router.delete('/penelitian/delete/:id', penelitianController.deletePenelitian);
module.exports = router;


