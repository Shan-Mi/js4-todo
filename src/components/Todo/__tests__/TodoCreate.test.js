// import React from "react"

// const myMock = jest.fn()
// afterEach(() => {
//   myMock.mockClear()
// })

// describe("test", () => {
//   // console.log(myMock.getMockName())
//   myMock.mockReturnValueOnce(10)
  
//   console.log(myMock(), myMock(), myMock(), myMock())
//   // > 10, 'x', true, true
//   test("result to be 10", () => {
//     myMock.mockReturnValueOnce(10)
//     // console.log(myMock())
//     expect(myMock()).toEqual(10)
//     expect(myMock.mock.calls.length).toEqual(1)
//   })
// })

// function forEach(items, callback) {
//   for (let index = 0; index < items.length; index++) {
//     callback(items[index])
//   }
// }

// const mockCallback = jest.fn((x) => 42 + x)
// forEach([0, 1], mockCallback)

// // The mock function is called twice
// expect(mockCallback.mock.calls.length).toBe(2)

// // The first argument of the first call to the function was 0
// expect(mockCallback.mock.calls[0][0]).toBe(0)

// // The first argument of the second call to the function was 1
// expect(mockCallback.mock.calls[1][0]).toBe(1)

// // The return value of the first call to the function was 42
// expect(mockCallback.mock.results[0].value).toBe(42)

// const myMock = jest.fn();
// console.log(myMock());
// // > undefined

// myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

// console.log(myMock(), myMock(), myMock(), myMock());
// // > 10, 'x', true, true


import React, { useState as useStateMock } from 'react';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('testing useState mocked', () => {
  const setState = jest.fn();
  const useStateMock = (initState) => [initState, setState];

  jest.spyOn(React, 'useState').mockImplementation(useStateMock);

  afterEach(() => {
    jest.clearAllMocks();
  });

  // your tests goes here
});