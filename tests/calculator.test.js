const Calculator = require('../src/calculator');

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    test('correctly adds two numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

  });

  describe('subtract', () => {
    test('correctly subtracts two numbers', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

  });

  describe('multiply', () => {
    test('correctly multiplies two numbers', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });

  });

  describe('divide', () => {
    test('correctly divides two numbers', () => {
      expect(calculator.divide(6, 2)).toBe(3);
    });

    test('throws an error when dividing by zero', () => {
      expect(() => {
        calculator.divide(6, 0);
      }).toThrow('Division by zero is not allowed');
    });
  });
});
