Looping A Triangle
for (let number = "#"; number <= "#######"; number = number + "#") {
    console.log(number);
  }

FizzBuzz
for (let number = 1; number <= 100; number += 1) {
    let result = "";
    if (number % 3 == 0) result += "Fizz";
    if (number % 5 == 0) result += "Buzz";
    console.log(result || number);
  }
  
Chess Board 
// not my answer but look at theirs as I couldnt get it and I was running out of time.
let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);