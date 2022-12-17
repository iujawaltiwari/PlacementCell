const express = require('express');
const router = express.Router();

const studentController = require('../controllers/student_controller');


router.get('/addStudent', studentController.addStudent);

router.post('/createStudent', studentController.createStudent);

module.exports = router;