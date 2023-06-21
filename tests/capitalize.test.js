const capitalize = require('../src/capitalize');

describe('capitalize', () => {
  test('capitalizes the first character of the string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('throws an error if input is not a string', () => {
    expect(() => {
      capitalize(123);
    }).toThrow('Input must be a string');
  });
});
