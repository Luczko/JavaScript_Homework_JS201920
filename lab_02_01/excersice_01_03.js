// 3)	Write a function that rotates a list by k elements. For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2].
// Try solving this without creating a copy of the list.

let numbers = [1, 2, 3, 4, 5, 6];

function rotator(k) {
  for (let i = 0; i < k; i++) {
    numbers.push(numbers[0]);
    numbers.splice(0, 1);
  }
  console.log(numbers);
}

rotator(2);
