// routes/scoresRouter.js
const express = require('express');
const router = express.Router();
const scoresController = require('../controllers/scoresController');
const {authenticate, authorize} = require('../middleware/auth')

// Rute untuk mendapatkan semua skor
router.get('/', scoresController.getAllScores);

// Rute untuk mendapatkan skor berdasarkan ID
router.get('/:id', scoresController.getScoreById);

// Rute untuk membuat skor baru
router.post('/', authenticate, authorize(['admin']), scoresController.createScore);

// Rute untuk mengupdate data siswa berdasarkan ID
router.put('/:id', scoresController.updateScore);

// Rute untuk menghapus data siswa berdasarkan ID
router.delete('/:id', scoresController.deleteScore);

module.exports = router;
