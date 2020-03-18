//  1) Write a program that finds the longest palindromic substring of a given string. ‘karakis’, ‘baerren’, ‘kajak’, ‘inni’.

"use strict";

class Palindromic {
  constructor(string) {
    this.string = string;
  }

  isPalindrome(e) {
    let palindrome = e
      .split("")
      .reverse()
      .join("");
    return e == palindrome;
  }

  longestPalindrome() {
    let maxLength = 0;
    let longestPali = "";
    let stringLength = this.string.length;

    for (let i = 0; i < stringLength; i++) {
      let subString = this.string.substr(i, stringLength);

      for (let j = subString.length; j >= 0; j--) {
        let superSubString = subString.substr(0, j);
        if (superSubString.length > 1 && this.isPalindrome(superSubString)) {
          if (superSubString.length > maxLength) {
            maxLength = superSubString.length;
            longestPali = superSubString;
          }
        }
      }
    }

    return longestPali;
  }
}

let phrase = new Palindromic("baerren");
console.log(phrase.longestPalindrome());
