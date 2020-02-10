const request = require('../test-helper/request.test-helper');
const db = require('../../database');

describe('# index test', () => {
  const getBaseURL = (URL) => `${URL}`;
  const baseURL = getBaseURL('/users');
  const getRandNumWithString = (prefix = 'test', max = 1000000) => `${prefix}${Math.floor(Math.random() * max)}}`;
  
  const mockUserBody = {
    email: `${getRandNumWithString()}@gmail.com`,
    password: '1234567890',
    nickname: getRandNumWithString('test-nickname'),
  };
  
  describe('## users API test', () => {
    test('# POST /users', async () => {
      await request
        .post(baseURL)
        .send(mockUserBody)
        .then((res) => {
          expect(res.statusCode).toEqual(200);
        });
    });
  });
  
  describe('## Model Test', () => {
    const modelName = 'User';
    test('create', async () => {
      const result = await db[modelName].create(mockUserBody);
      expect(result.email).toEqual(mockUserBody.email);
    });
  });
});
