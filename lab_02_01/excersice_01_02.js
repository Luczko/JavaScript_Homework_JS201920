// 2)	Write a guessing game where the user has to guess a secret number. After every guess the program
// tells the user whether their number was too large or too small. At the end the number of tries needed should be printed.
// It counts only as one try if they input the same number multiple times consecutively. Range 1-100.

const secretNumberGame = secretNumber => {
  const guess = setInterval(() => guessSN(), 500);
  const secretNum = secretNumber;
  let min = 1;
  let max = 100;
  let randomNumber = Math.floor(Math.random() * (max - min) + min);
  const userTries = [];
  const guessSN = () => {
    userTries.push(randomNumber);
    console.log("random", randomNumber);
    console.log("min", min);
    console.log("max", max);
    if (randomNumber === secretNum) {
      console.log(`Collection of all tries: ${userTries}.`);
      const uniqueUserTries = userTries.length;
      console.log(`You have needed ${uniqueUserTries.length} unique tries.`);
      clearInterval(guess);
    } else if (randomNumber < secretNum) {
      console.log(`You got: ${randomNumber}. Your number is too small.`);
      min = randomNumber + 1;
      randomNumber = Math.floor(Math.random() * (max - min) + min);
    } else if (randomNumber > secretNum) {
      console.log(`You got: ${randomNumber}. Your number is too high.`);
      max = randomNumber - 1;

      randomNumber = Math.floor(Math.random() * (max - min) + min);
    }
  };
};

secretNumberGame(6);
