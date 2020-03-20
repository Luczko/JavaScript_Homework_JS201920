// 5)	Write a code that takes a number/string and returns a list of its digits. So for 2342 it should return [2,3,4,2].’A243b’ -> [2,4,3].

let text = "i2i3i4i2i";

function code(e) {
  let parsed = [];
  if (typeof e == "string") {
    let numbers = e.match(/\d+/g).map(Number);
    // console.log(numbers);
    let splited = numbers.toString().split("");
    // console.log(splited);
    let noComas = splited.filter(f => {
      return f != ",";
    });
    // console.log(noComas);
    for (let i = 0; i < noComas.length; i++) {
      let num = parseInt(noComas[i]);
      parsed.push(num);
    }
    return parsed;
  } else if (typeof e == "number") {
    let splited = e.toString().split("");
    for (let i = 0; i < splited.length; i++) {
      let num = parseInt(splited[i]);
      parsed.push(num);
    }
    return parsed;
  } else {
    return "wrong type of data";
  }
}
console.log(code(text));
