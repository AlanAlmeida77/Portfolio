const defineMessageModel = (sequelize, DataTypes) => {
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
  
    return Message;
  };
  
  module.exports = defineMessageModel;
  