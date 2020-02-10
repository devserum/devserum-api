module.exports = {
  up: (queryInterface, DataTypes) => queryInterface.createTable(
    'Users',
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
      email: {
        type: DataTypes.TEXT,
        unique: true,
      },
      isEmailConfirmed: {
        type: DataTypes.BOOLEAN,
      },
      password: {
        type: DataTypes.TEXT,
      },
      nickname: {
        type: DataTypes.TEXT,
      },
    },
  ),
  down: (queryInterface) => queryInterface.dropTable('Templates'),
};
