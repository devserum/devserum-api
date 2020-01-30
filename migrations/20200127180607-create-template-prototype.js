module.exports = {
  up: (queryInterface, DataTypes) => queryInterface.createTable(
    'Templates',
    {
      id: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      sequence: {
        allowNull: false,
        type: DataTypes.BIGINT,
        autoIncrement: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
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
    },
  ),
  down: (queryInterface) => queryInterface.dropTable('Templates'),
};
