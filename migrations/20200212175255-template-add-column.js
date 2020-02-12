module.exports = {
  up: (queryInterface, DataTypes) => new Promise((resolve) => {
    resolve([
      queryInterface.addColumn('Templates',
        'numberField',
        {
          type: DataTypes.BIGINT,
        }),
      queryInterface.addColumn('Templates',
        'booleanField',
        {
          type: DataTypes.BOOLEAN,
        }),
    ]);
  }),
  down: (queryInterface) => new Promise((resolve) => {
    resolve([
      queryInterface.removeColumn('Templates', 'numberField'),
      queryInterface.removeColumn('Templates', 'booleanField'),
    ]);
  }),
};
