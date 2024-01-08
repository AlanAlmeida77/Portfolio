

const express = require('express');
const router = express.Router();
const getMessageController = require('../controllers/getMessageController');

// Ruta para obtener todos los mensajes
router.get('/get-messages', getMessageController);

module.exports = router;

