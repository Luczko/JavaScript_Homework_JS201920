// 1)	Write a program that prints all prime numbers in given range. Take sub from 1-100.

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

for (let i = 0; i < 100; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
