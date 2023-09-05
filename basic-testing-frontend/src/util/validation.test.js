import {expect, it} from 'vitest';
import {validateNumber} from './validation';

it("should throw Invalid number input if passed value is not a number", () => {
    const number = 'input';
    const result = () => validateNumber(number);
    expect(result).toThrow();
})

it("should not throw an error if passed value is a number", () => {
    const number = 1;
    const resultFn = () => validateNumber(number);
    expect(resultFn).not.toThrow();
})

it("should throw an error if numeric value was passed as a type string", () => {
    const number = '1';
    const resultFn = () => validateNumber(number);
    expect(resultFn).toThrow();
})

