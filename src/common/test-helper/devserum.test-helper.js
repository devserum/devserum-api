class DevSerumTestHelper {
  static getRandomNum(max = 1000000) {
    return Math.floor(Math.random() * max);
  }
  
  static getRandomString(prefix = 'test', max) {
    return `${prefix}${DevSerumTestHelper.getRandomNum(max)}`;
  }
}

module.exports = DevSerumTestHelper;
