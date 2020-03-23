// 2) Given two strings, write a program that efficiently finds the longest common subsequence (substring).
// 'karol rolki'

"use strict";

class Subsequence {
  constructor(s1, s2) {
    this.s1 = s1;
    this.s2 = s2;
  }

  findSubsequence() {
    let result = "";
    let a = this.s1;
    let b = this.s2;

    for (let i = 0; i < a.length; i++) {
      for (let j = a.length - i; j > 0; j--) {
        let sequence = a.substr(i, j);

        if (b.includes(sequence) && sequence.length > result.length) {
          result = sequence;
        }
      }
    }
    if (result == "") {
      return "no common subsequence";
    } else {
      return result;
    }
  }
}

let solution = new Subsequence("karol", "rolki");
let solved = solution.findSubsequence();

console.log(solved);
