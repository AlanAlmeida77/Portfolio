// En tu archivo controllers/messageController.js

const { sequelize, Message } = require('../index');

const createMessage = async (req, res) => {
    try {
        console.log('Request Body:', req.body); // Añadir este log para verificar el cuerpo de la solicitud

        if (!req.body || !req.body.name || !req.body.email || !req.body.content) {
            console.log('Invalid Request Body'); // Añadir este log para verificar si falta algún campo
            return res.status(400).json({ error: 'Invalid request body. Make sure all required fields are provided.' });
        }

        const { name, email, content } = req.body;
        const newMessage = await Message.create({ name, email, content });
        res.json(newMessage);
    } catch (error) {
        console.error('Error creating message:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    createMessage,
};
