const express = require('express');
const router = express.Router();
const lessonController = require('../controllers/lessonController');

// Mendapatkan semua lessons
router.get('/lessons', lessonController.getAllLessons);

// Menambahkan lesson baru
router.post('/lessons', lessonController.addLesson);

// Memperbarui lesson berdasarkan ID
router.put('/lessons/:id', lessonController.updateLesson);

// Menghapus lesson berdasarkan ID
router.delete('/lessons/:id', lessonController.deleteLesson);

module.exports = router;
