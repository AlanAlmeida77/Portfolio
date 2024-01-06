const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const cors = require('cors'); 
const messageRoutes = require('./routes/messageRoute');
require('dotenv').config();


const sequelize = new Sequelize(process.env.PG_CONNECTION_STRING);


const Message = sequelize.define('Message', {
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    content: {
        type: DataTypes.TEXT,
    },
});

// Sincroniza el modelo con la base de datos
sequelize.sync()
    .then(() => {
        console.log('Database synchronized');
    })
    .catch((err) => {
        console.error('Error synchronizing database:', err);
    });

const app = express();

// Aplica el middleware cors
app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
}));

app.use('/crud', messageRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Exporta el modelo Message
module.exports = {
    sequelize,
    Message,
};
