const express = require('express');




const router = express.Router();
const homeController = require('../controllers/users_cantroller');
const app = express();
console.log("router loaded");


router.get("/", homeController.signUp);
router.use('/users', require('./users'));

module.exports = router;