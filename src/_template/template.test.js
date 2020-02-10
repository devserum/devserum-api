const request = require('../test-helper/request.test-helper');
const db = require('../../database');

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
  
  const getBaseURL = (URL) => `${URL}`;
  const baseURL = getBaseURL('/templates');
  describe('## _template API test', () => {
    test('# POST /templates', async () => {
      await request
        .post(baseURL)
        .then((res) => {
          expect(res.statusCode).toEqual(200);
        });
    });
  });
  
  describe('## Model Test', () => {
    const modelName = 'Template';
    test('create', async () => {
      const result = await db[modelName].create({ textField: 'test' });
      expect(result.textField).toEqual('test');
    });
  });
});
