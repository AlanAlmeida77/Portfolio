// models/Message.js

const defineMessageModel = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
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

  return Message;
};

module.exports = defineMessageModel;
