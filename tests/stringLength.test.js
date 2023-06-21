const stringLength = require('../src/stringLength');

describe('stringLength', () => {
  test('returns the correct length of the string', () => {
    expect(stringLength('hello')).toBe(5);
  });

  test('throws an error if input is not a string', () => {
    expect(() => {
      stringLength(123);
    }).toThrow('Input must be a string');
  });

  test('throws an error if string length is less than 1', () => {
    expect(() => {
      stringLength('');
    }).toThrow('String length must be between 1 and 10');
  });

  test('throws an error if string length is greater than 10', () => {
    expect(() => {
      stringLength('thisisaverylongstring');
    }).toThrow('String length must be between 1 and 10');
  });
});
