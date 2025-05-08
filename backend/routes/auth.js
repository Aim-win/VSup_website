// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route d'inscription
router.post('/register', authController.registerUser);

module.exports = router;
