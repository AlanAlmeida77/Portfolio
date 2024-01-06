// En algún archivo, por ejemplo, routes/messageRoutes.js

const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

// Ruta para crear un nuevo mensaje
router.post('/messages', messageController.createMessage);

// Puedes agregar rutas adicionales según tus necesidades.

module.exports = router;
