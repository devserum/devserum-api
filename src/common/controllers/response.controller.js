class ResponseController {
  static async asyncResponse(req, res, next, args, asyncFunc) {
    asyncFunc
      .then((result) => {
        res.send(result);
      });
  }
}

module.exports = ResponseController;
