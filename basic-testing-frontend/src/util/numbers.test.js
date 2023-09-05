import {expect, it} from 'vitest';
import {transformToNumber} from './numbers';

it("should transform a numeric string value to number", () => {
    const number = '1';
    const result = transformToNumber(number);
    expect(result).toBe(1);
})

it("return data should be type of number", () => {
    const number = '2';
    const result = transformToNumber(number);
    expect(result).toBeTypeOf('number');
})

it("should yield NaN if given string is ", () => {
    const number = 'number';
    const result = transformToNumber(number);
    expect(result).toBeNaN();
})