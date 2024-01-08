// controllers/deleteMessageController.js

const { Message } = require('../db');

const deleteMessage = async (req, res) => {
  try {
    const messageId = req.params.id;

    // Verificar si el mensaje existe
    const existingMessage = await Message.findByPk(messageId);

    if (!existingMessage) {
      return res.status(404).json({ error: 'Message not found' });
    }

    // Eliminar el mensaje
    await existingMessage.destroy();

    res.json({ success: true, message: 'Message deleted successfully!' });
  } catch (error) {
    console.error('Error deleting message:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = deleteMessage;
