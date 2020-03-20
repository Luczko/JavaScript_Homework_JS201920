// 4)	Write a class that prints the list of the first n Fibonacci numbers. The first two Fibonacci numbers are 1 and 1.
// The n+1-st Fibonacci number can be computed by adding the n-th and the n-1-th Fibonacci number.
// The first few are therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.

class Fibonacci {
  constructor(n) {
    this.n = n;
  }
  sequence() {
    let numbers = [];
    for (let i = 0; i < this.n; i++) {
      if (i == 0 || i == 1) {
        numbers.push(1);
      } else {
        numbers.push(numbers[i - 1] + numbers[i - 2]);
      }
    }
    return numbers;
  }
}

let solution = new Fibonacci(10).sequence();
console.log(solution);
