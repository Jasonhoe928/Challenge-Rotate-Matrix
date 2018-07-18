const Direction = require("./Direction").Direction;

/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
module.exports = class MatrixRotator {
  constructor( matrix ) {
    this.matrix = matrix;
  }

  //      |-- Must be Direction.CW
  //      v        or Direction.CCW
  rotate (direction) {
    // do work here
    console.log('the matrix ', this.matrix)
    // console.log('the directions ', direction)
    
    //It should take first number of every array and push into new arr
    //It should take new array and save it as original matrix array

    let newArr = [];
    let newMatrix = [[], [], [], [], []];
    if(direction === 'ClockWise') {
      for(let i = this.matrix.length-1; i > 0; i--) {
        newMatrix[i].push(matrix[i][0]);
      }
      // newMatrix.push(newArr);
      // newArr = [];
    }
    // console.log('new array ', newArr);
    console.log('newMatrix ', newMatrix)
    
    // must be a valid Direction, see Direction.js

  }
};