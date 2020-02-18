const DevserumInterface = require('../devserum.interface');

class ResponseController {
  static rappingToStandardFormat(data) {
    let metaInfos = {
      effectedRows: null,
      pageSize: null,
      count: null,
    };
    
    if (data.metaInfos) {
      metaInfos = {
        effectedRows: data.metaInfos.effectedRows || null,
        pageSize: data.pageSize || null,
        count: data.metaInfos.count || 0,
      };
    }
    
    return {
      data: data.rows || null,
      nextLink: null,
      prevLink: null,
      metaInfos,
    };
  }
  
  static wrappingModelFormat(action, result) {
    let resultFormat = result;
    if (action === DevserumInterface.actions.update) {
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
        metaInfos: {
          count: 1,
        },
      };
    }
    
    if (action === 'getList') {
      resultFormat = {
        rows: result.rows,
        metaInfos: {
          count: result.count,
        },
      };
    }
    
    if (action === DevserumInterface.actions.delete) {
      resultFormat = {
        metaInfos: {
          effectedRows: result,
        },
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
