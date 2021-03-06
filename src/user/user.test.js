const DevSerumTestHelper = require('../common/test-helper/devserum.test-helper');
const request = require('../common/test-helper/request.test-helper');
const db = require('../../database');

describe('# User test', () => {
  const getBaseURL = (URL) => `${URL}`;
  const baseURL = getBaseURL('/users');
  
  describe('## users API test', () => {
    const mockUserBody = {
      email: `${DevSerumTestHelper.getRandomString()}@gmail.com`,
      password: '1234567890',
      nickname: DevSerumTestHelper.getRandomString('test-nickname'),
    };
    
    let createdUser;
    
    test('# POST /users', async () => {
      await request
        .post(baseURL)
        .send(mockUserBody)
        .then((res) => {
          expect(res.statusCode).toEqual(200);
          [createdUser] = res.body.data;
          expect(createdUser.email).toEqual(mockUserBody.email);
        });
    });
    
    test('# GET /user/{userId}', async () => {
      const url = `${baseURL}/${createdUser.id}`;
      await request
        .get(url)
        .then((res) => {
          expect(res.statusCode).toEqual(200);
          expect(res.body.data[0].email).toEqual(createdUser.email);
        });
    });
  });
  
  describe('## Model Test', () => {
    const mockUserBody = {
      email: `${DevSerumTestHelper.getRandomString()}@gmail.com`,
      password: '1234567890',
      nickname: DevSerumTestHelper.getRandomString('test-nickname'),
    };
    const modelName = 'User';
    test('create', async () => {
      const result = await db[modelName].create(mockUserBody);
      expect(result.email).toEqual(mockUserBody.email);
    });
  });
});
