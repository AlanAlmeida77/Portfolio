require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');
const {
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/Mensajes`, {
  logging: false,
  native: false,
  define: {
    timestamps: false,
    freezeTableName: true,
  }
});

const defineMessageModel = require('./models/Message');
const Message = defineMessageModel(sequelize, DataTypes);

module.exports = {
  sequelize,
  conn: sequelize,
  Message,
};
