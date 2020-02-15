const request = require('./common/test-helper/request.test-helper');

describe('# index test', () => {
  describe('## API test', () => {
    test('# GET /', async () => {
      await request
        .get('/')
        .then((res) => {
          expect(res.statusCode).toEqual(200);
        });
    });
    
    test('# GET /health-check', async () => {
      await request
        .get('/health-check')
        .then((res) => {
          expect(res.statusCode).toEqual(200);
        });
    });
  });
});
