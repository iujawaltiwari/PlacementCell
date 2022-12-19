const express = require('express');
const passport = require('passport');

const { downloadCSV } = require('../controllers/csv_controller');
const router = express.Router();

const usersController = require('../controllers/users_cantroller');


router.get('/profile', usersController.profile);
router.get("/sign-up", usersController.signUp);
router.get("/sign-in", usersController.signIn);

router.post('/create', usersController.create);
router.post('/create-session', usersController.createSession);

router.get('/sign-out', usersController.signOut);
router.get('/reset-password', usersController.resetPassword);
router.post('/user-reset-password',passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'}
), usersController.resetUserPassword);
router.get('/csv/downloadcsv',downloadCSV);
module.exports = router;