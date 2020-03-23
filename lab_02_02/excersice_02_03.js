// 3) Write a code that multiplies two matrices together. Dimension validation required.

"use strict";

class Matrices {
  constructor() {
    this.m1 = m1;
    this.m2 = m2;
  }
  multiplyMatrices() {
    let val1 = this.m1.every(e => e.length === this.m2.length);
    let val2 = this.m2.every(e => e.length === this.m1.length);
    if (val1 && val2) {
      let result = [];
      for (let i = 0; i < this.m1.length; i++) {
        result[i] = [];
        for (let j = 0; j < this.m2[0].length; j++) {
          let sum = 0;
          for (let k = 0; k < this.m1[0].length; k++) {
            sum += this.m1[i][k] * this.m2[k][j];
          }
          result[i][j] = sum;
        }
      }
      return result;
    } else return "unable to multiply";
  }
}

let m1 = [
  [9, 6],
  [3, 7],
  [2, 1]
];
let m2 = [
  [1, 4, 6],
  [8, 2, 4]
];

let solution = new Matrices(m1, m2);
let solved = solution.multiplyMatrices();
console.log(solved);
console.log(solved[0]);
console.log(solved[1]);
console.log(solved[2]);
