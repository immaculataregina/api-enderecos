'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/enderecos.controller');

// Cadastrar novo usuário
router.post('/', controller.cadastrarEndereco)

module.exports = router;