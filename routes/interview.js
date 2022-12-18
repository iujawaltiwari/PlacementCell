const express = require("express");
const router = express.Router();

const interviewController = require('../controllers/interview_controller');

router.get('/addInterview', interviewController.addInterview);
router.post('/createInterview',interviewController.createInterview);

router.get('/show-interview-details/:id',interviewController.interviewDetails);


module.exports = router;