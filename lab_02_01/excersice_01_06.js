// 6)	Write function that translates a text to Pig Latin and back. English is translated to Pig Latin by taking the first letter of every word,
//  moving it to the end of the word and adding ‘ay’. “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.

let text = "The quick brown fox";

function pigLatin(e) {
  let phrase = e.toLowerCase();
  let phraseArray = phrase.split(" ").map(e => {
    return e.split("");
  });
  let latin = [];
  for (let i = 0; i < phraseArray.length; i++) {
    phraseArray[i].push(phraseArray[i][0]);
    phraseArray[i].splice(0, 1);
    phraseArray[i].push("ay");
    let joined = phraseArray[i].join("");
    latin.push(joined);
  }
  return latin.join(" ");
}

console.log(pigLatin(text));
