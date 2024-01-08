// controllers/getMessageController.js

const { Message } = require('../db');

const getMessage = async (req, res) => {
  try {
    const messages = await Message.findAll({
      attributes: ['id', 'name', 'email', 'content'],
    });

    res.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = getMessage;

