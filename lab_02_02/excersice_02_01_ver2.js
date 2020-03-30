//  1) Write a program that finds the longest palindromic substring of a given string. ‘karakis’, ‘baerren’, ‘kajak’, ‘inni’.

"use strict";

class IsPalindrome {
  constructor(str) {
    this.str = str;
  }

  isPalindrome(e) {
    let palindrome = e
      .split("")
      .reverse()
      .join("");
    return e == palindrome;
  }
}

class LongestPalindrome extends IsPalindrome {
  constructor(str) {
    super(str);
  }

  longestPalindrome() {
    let maxLength = 0;
    let longestPali = "";
    let stringLength = this.str.length;

    for (let i = 0; i < stringLength; i++) {
      let subString = this.str.substr(i, stringLength);

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

let phrase = new LongestPalindrome("karakis");

console.log(phrase.longestPalindrome()); //sprawdza najdłuższy palindrom

console.log(phrase.isPalindrome("kajak")); //sprawdza dowolny wyraz czy jest palindromem true/false
