import {expect, it} from 'vitest';
import { add } from './math';

it("should verify the implementation of math function", ()=> {
    const arrNumbers = [1, 2,3];
    const result = add(arrNumbers);
    console.log(typeof result, result);

    const expectedResult = arrNumbers.reduce(
        (prevValue, curValue) => prevValue + curValue, 0);
    expect(result).toBe(expectedResult);
})

it("should yield NaN if there is any invalid number", () => {
    const arrNumbers = ["invalid", 2];
    const result = add(arrNumbers);
    console.log(typeof result, result);

    //const expectedResult = arrNumbers.reduce((prevValue, curValue) => prevValue + curValue, 0);
    expect(result).toBeNaN();
})

it("should yield correct sum if array of numeric string value is provided", () => {
    const arrNumbers = ['1', '2'];
    const result = add(arrNumbers);
    console.log(typeof result, result);

    const expectedResult = arrNumbers.reduce((prevValue, curValue) => +prevValue + +curValue , 0);
    expect(result).toBe(expectedResult);
})
