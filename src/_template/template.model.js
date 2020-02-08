const uuidv4 = require('uuid/v4');

const Template = (sequelize, DataTypes) => {
  const template = sequelize.define('Template',
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
      textField: {
        type: DataTypes.TEXT,
      },
      arrayTextField: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
      },
      numberField: {
        type: DataTypes.BIGINT,
      },
      booleanField: {
        type: DataTypes.BOOLEAN,
      },
    }, {});
  
  // eslint-disable-next-line
  template.beforeCreate(async (instance, options) => {
  });
  
  // eslint-disable-next-line
  template.associate = (db) => {
  };
  
  return template;
};

module.exports = Template;
