const DevserumControllerInterface = {
  actions: {
    delete: Symbol('delete'),
    deleteAndResponse: Symbol('deleteAndResponse'),
    update: Symbol('update'),
    updateAndResponse: Symbol('updateAndResponse'),
  },
};

module.exports = DevserumControllerInterface;
