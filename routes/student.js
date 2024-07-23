// routes/studentsRouter.js
const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/studentController');
const {authenticate, authorize} = require('../middleware/auth')

// Rute untuk mendapatkan semua data siswa
router.get('/', studentsController.getAllStudents);

// Rute untuk mendapatkan data siswa berdasarkan ID
router.get('/:id', studentsController.getStudentById);

// Rute untuk membuat data siswa baru
router.post('/', authenticate, authorize(['admin']), studentsController.createStudent);

// Rute untuk mengupdate data siswa berdasarkan ID
router.put('/:id', studentsController.updateStudent);

// Rute untuk menghapus data siswa berdasarkan ID
router.delete('/:id', studentsController.deleteStudent);

module.exports = router;
