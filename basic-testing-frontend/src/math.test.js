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

it("should yield 0 if an empty is provided", () => {
    const arrNumbers = [];
    const result = add(arrNumbers);
    expect(result).toBe(0);
})

it("should throw an error if no value is passed to the function", () => {
    const resultFn = () => {
        add();
    };
    expect(resultFn).toThrow();
})

it("should throw an error if multiple argument is provided", () => {
    const num1 = 1;
    const num2 = 2;

    //const result = add(num1, num2);
    const resultFn = () => {
        add(num1, num2);
    }
    expect(resultFn).toThrow(/is not iterable/);
})
