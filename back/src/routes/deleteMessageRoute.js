const express = require('express');
const router = express.Router();
const deleteMessageController = require('../controllers/deleteMessageController');

// Ruta para eliminar un mensaje por su ID
router.delete('/messages/:id', deleteMessageController);

module.exports = router;
