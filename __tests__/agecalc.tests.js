// import { Checker } from './../src/js/checker.js';

// describe('Checker', () => {

//   let invalidChecker1;
//   let invalidChecker2;
//   let testChecker1;
//   let testChecker2;
//   let testChecker3;
//   let testChecker4;

  

//   test('expect board to be 9 by 9', () => {
//     expect(testChecker1.boardIsValid()).toEqual(true);
//     expect(invalidChecker1.boardIsValid()).toEqual(false);
//     expect(invalidChecker2.boardIsValid()).toEqual(false);
//   });

//   test('expect each row to have 1 - 9', () => {
//     expect(testChecker2.rowsAreValid()).toEqual(true);
//     expect(testChecker3.rowsAreValid()).toEqual(false);
//   });

//   test('expect each column to have 1 - 9', () => {
//     expect(testChecker3.columnsAreValid()).toEqual(true);
//     expect(testChecker2.columnsAreValid()).toEqual(false);
//   });

//   test('should create array matching grid from x and y', () => {
//     expect(testChecker2.create3x3(0,0)).toEqual([1,2,3,1,2,3,1,2,3]);
//   });

//   test('should check array of nine digits for 1-9', () => {
//     expect(testChecker4.checkNineDigits(testChecker4.board[0])).toEqual(true);
//     expect(testChecker3.checkNineDigits(testChecker3.board[0])).toEqual(false);
//   });

//   test('should check the 3x3 grids', () => {
//     expect(testChecker4.check3x3()).toEqual(true);
//     expect(testChecker3.check3x3()).toEqual(false);
//   });

// });
