// routes/studentsRouter.js
const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/studentController');
const { authenticate, authorize } = require('../middleware/auth');

// Rute untuk mendapatkan semua data siswa
// Rute ini tidak memerlukan otentikasi atau otorisasi
router.get('/', studentsController.getAllStudents);

// Rute untuk mendapatkan data siswa berdasarkan ID
// Rute ini tidak memerlukan otentikasi atau otorisasi
router.get('/:id', studentsController.getStudentById);

// Rute untuk membuat data siswa baru
// Rute ini memerlukan otentikasi dan otorisasi
// Middleware `authenticate` memastikan bahwa pengguna telah otentikasi
// Middleware `authorize(['admin'])` memastikan bahwa hanya pengguna dengan peran 'admin' yang dapat mengakses rute ini
router.post('/', authenticate, authorize(['admin']), studentsController.createStudent);

// Rute untuk mengupdate data siswa berdasarkan ID
// Rute ini tidak memerlukan otentikasi atau otorisasi
router.put('/:id', studentsController.updateStudent);

// Rute untuk menghapus data siswa berdasarkan ID
// Rute ini tidak memerlukan otentikasi atau otorisasi
router.delete('/:id', studentsController.deleteStudent);

module.exports = router;
