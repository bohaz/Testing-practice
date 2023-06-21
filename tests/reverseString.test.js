const reverseString = require('../src/reverseString');

describe('reverseString', () => {
  test('returns the reversed string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('throws an error if input is not a string', () => {
    expect(() => {
      reverseString(123);
    }).toThrow('Input must be a string');
  });
});
