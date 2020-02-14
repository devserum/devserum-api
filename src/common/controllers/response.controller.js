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
  
  static async modelResponse(req, res, next, args, model) {
    model
      .then((result) => {
        let resultFormat = result;
        if (!result.rows) {
          resultFormat = {
            rows: [result],
            count: 1,
          };
        }
        res.send(ResponseController.rappingToStandardFormat(resultFormat));
      });
    // .catch((e) => res.send(e));
  }
}

module.exports = ResponseController;
