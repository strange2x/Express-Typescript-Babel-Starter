/* eslint-disable max-lines-per-function */
import {
  addition,
  subtraction,
  multiplicaton,
  division,
} from '../../src/Utils/Calc';

describe('\n💡 Utils > Calc\n', () => {
  // Addition Testing
  describe('📌 Addition Function', () => {
    test('If addition function returns a number', () => {
      expect(typeof addition(1, 1)).toStrictEqual('number');
    });
    test('Addition', () => {
      expect(addition(1, 2)).toStrictEqual(3);
    });
  });
  // Subtraction Testing
  describe('📌 Subtraction Function', () => {
    test('If subtraction function returns a number', () => {
      expect(typeof subtraction(2, 3)).toStrictEqual('number');
    });
    test('Subtraction', () => {
      expect(subtraction(4, 1)).toBe(3);
    });
    test('Subtraction returns negative number too', () => {
      expect(subtraction(1, 2)).toStrictEqual(-1);
    });
  });
  // Multiplication Testing
  describe('📌 Multiplication Function', () => {
    test('If multiplication function returns a number', () => {
      expect(typeof multiplicaton(1, 1)).toStrictEqual('number');
    });
    test('Multiplication', () => {
      expect(multiplicaton(1, 1)).toStrictEqual(1);
    });
    test('Multiplication of Zero', () => {
      expect(multiplicaton(1, 0)).toStrictEqual(0);
    });
  });
  // Division Testing
  describe('📌 Division Function', () => {
    test('If division function returns a number', () => {
      expect(typeof division(2, 4)).toStrictEqual('number');
    });
    test('Division', () => {
      expect(division(4, 2)).toStrictEqual(2);
    });
    test('Division by Zero is Infinity', () => {
      expect(division(4, 0)).toStrictEqual(Infinity);
    });
  });
});
