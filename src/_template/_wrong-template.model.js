const WrongTemplate = (sequelize, DataTypes) => {
  const wrongTemplate = sequelize.define('WrongTemplate',
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
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
    }, {});
 
  return wrongTemplate;
};

module.exports = WrongTemplate;
