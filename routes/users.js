const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_cantroller');


router.get('/profile', usersController.profile);
router.get("/sign-up", usersController.signUp);
router.get("/sign-in", usersController.signIn);

router.post('/create', usersController.create);
router.post('/create-session', usersController.createSession);

router.get('/sign-out', usersController.signOut);
router.get('/reset-password', usersController.resetPassword);
router.post('/user-reset-password', usersController.resetUserPassword);

module.exports = router;