const DevSerumTestHelper = require('../common/test-helper/devserum.test-helper');
const request = require('../common/test-helper/request.test-helper');
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
    
    test('# PUT /templates/:templateId', async () => {
      const targetURL = getURLWithId(createdModel.id);
      
      const updateBody = {
        id: createdModel.id,
        textField: DevSerumTestHelper.getRandomString('updated-'),
      };
      
      await request
        .put(targetURL)
        .send(updateBody)
        .then((res) => {
          expect(res.statusCode).toEqual(200);
          expect(res.body.data[0].id).toEqual(updateBody.id);
          expect(res.body.data[0].textField).toEqual(updateBody.textField);
        });
    });
    
    test('# DELETE /templates/:templateId', async () => {
      const targetURL = getURLWithId(createdModel.id);
      
      await request
        .delete(targetURL)
        .then((res) => {
          expect(res.statusCode).toEqual(200);
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
    
    test('# GET /templates/subUrl', async () => {
      const targetURL = '/templates/subUrl';
      await request
        .get(targetURL)
        .then((res) => {
          expect(res.statusCode).toEqual(200);
        });
    });
  });
  
  describe('## Model Test', () => {
    const modelName = 'Template';
    let createdModel;
    test('create', async () => {
      createdModel = await db[modelName].create({ textField: 'test' });
      
      expect(createdModel.textField).toEqual('test');
    });
    
    test('update', async () => {
      const updatedModel = await db[modelName].update(
        {
          textField: 'test-update',
        },
        {
          where: { id: createdModel.id },
          returning: true,
        },
      );
      
      expect(updatedModel[0]).toBeGreaterThanOrEqual(1);
    });
  });
});
