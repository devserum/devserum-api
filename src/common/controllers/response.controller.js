class ResponseController {
  static rappingToStandardFormat(data) {
    return {
      data: null || data.rows,
      nextLink: null,
      prevLink: null,
      metaInfos: {
        effectedRows: null,
        pageSize: null,
        count: 0 || data.count,
      },
    };
  }
  
  static async asyncResponse(req, res, next, args, asyncFunc) {
    asyncFunc
      .then((result) => {
        res.send(result);
      });
  }
  
  static async modelResponse(req, res, next, args, model) {
    model
      .then((result) => {
        res.send(ResponseController.rappingToStandardFormat(result));
      });
    // .catch((e) => res.send(e));
  }
}

module.exports = ResponseController;
