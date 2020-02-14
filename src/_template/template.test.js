const request = require('../test-helper/request.test-helper');
const db = require('../../database');

describe('# Template test', () => {
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
  
  const baseURL = '/templates';
  const getURLWithId = (id) => `${baseURL}/${id}`;
  describe('## _template API test', () => {
    let createdModel;
    
    test('# POST /templates', async () => {
      await request
        .post(baseURL)
        .then((res) => {
          expect(res.statusCode).toEqual(200);
          [createdModel] = res.body.data;
        });
    });
    
    test('# GET /templates/:templateId', async () => {
      const targetURL = getURLWithId(createdModel.id);
      
      await request
        .get(targetURL)
        .then((res) => {
          expect(res.statusCode).toEqual(200);
          expect(res.body.data[0].id).toEqual(createdModel.id);
        });
    });
    
    test('# GET /templates', async () => {
      await request
        .get(baseURL)
        .then((res) => {
          expect(res.statusCode).toEqual(200);
          expect(res.body.metaInfos.count).toBeGreaterThanOrEqual(1);
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
