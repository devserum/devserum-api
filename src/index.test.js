const request = require('./test-helper/request.test-helper');

describe('# index test', () => {
  describe('## API test', () => {
    test('# GET /', (done) => {
      request
        .get('/')
        .then((res) => {
          expect(res.statusCode).toEqual(200);
          done();
        });
    });
    
    test('# GET /health-check', (done) => {
      request
        .get('/health-check')
        .then((res) => {
          expect(res.statusCode).toEqual(200);
          done();
        });
    });
  });
});
