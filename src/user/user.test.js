const request = require('../test-helper/request.test-helper');
const db = require('../../database');

describe('# User test', () => {
  const getBaseURL = (URL) => `${URL}`;
  const baseURL = getBaseURL('/users');
  const getRandNumWithString = (prefix = 'test', max = 1000000) => `${prefix}${Math.floor(Math.random() * max)}`;
  
  
  describe('## users API test', () => {
    const mockUserBody = {
      email: `${getRandNumWithString()}@gmail.com`,
      password: '1234567890',
      nickname: getRandNumWithString('test-nickname'),
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
      email: `${getRandNumWithString()}@gmail.com`,
      password: '1234567890',
      nickname: getRandNumWithString('test-nickname'),
    };
    const modelName = 'User';
    test('create', async () => {
      const result = await db[modelName].create(mockUserBody);
      expect(result.email).toEqual(mockUserBody.email);
    });
  });
});
