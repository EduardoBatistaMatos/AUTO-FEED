const express = require('express');

const router = express.Router();

const controllerLogin = require('../controllers/LoginControllers');

router.get('/', controllerLogin.login);
router.post('/validar', controllerLogin.validarPSW);

module.exports = router

