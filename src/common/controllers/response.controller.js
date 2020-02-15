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
  
  static wrappingModelFormat(action, result) {
    let resultFormat = result;
    if (action === 'update') {
      const [count, rows] = result;
      resultFormat = {
        rows,
        count,
      };
    }
    if (action === 'create' || action === 'get') {
      resultFormat = {
        rows: [result],
        // TODO: it' should be 0 or 1, based on result
        count: 1,
      };
    }
    return ResponseController.rappingToStandardFormat(resultFormat);
  }
  
  static async modelResponse(req, res, next, args, model, action) {
    model
      .then((result) => {
        res.send(ResponseController.wrappingModelFormat(action, result));
      });
    // .catch((e) => res.send(e));
  }
}

module.exports = ResponseController;
