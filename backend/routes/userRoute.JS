const express = require('express');
const { user } = require('../controllers');

const router = express.Router();

router.get('/createAdmin', user.createAdmin); 

module.exports = router;