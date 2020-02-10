const uuidv4 = require('uuid/v4');

const User = (sequelize, DataTypes) => {
  const user = sequelize.define('User',
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: uuidv4(),
      },
      sequence: {
        type: DataTypes.BIGINT,
        allowNull: false,
        autoIncrement: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
      },
      email: {
        type: DataTypes.TEXT,
        unique: true,
        isEmail: true,
        max: 100,
      },
      isEmailConfirmed: {
        type: DataTypes.BOOLEAN,
      },
      password: {
        type: DataTypes.TEXT,
        notEmpty: true,
        validate: {
          len: [10, 30],
        },
      },
      nickname: {
        type: DataTypes.TEXT,
        len: [5, 30],
      },
    }, {});
  
  // eslint-disable-next-line
  user.beforeCreate(async (instance, options) => {
  });
  
  // eslint-disable-next-line
  user.associate = (db) => {
  };
  
  return user;
};

module.exports = User;
