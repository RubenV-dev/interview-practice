// Premise of this question is to loop through a string made of both capital and lowercase letters.
// A lowercase letter gives you a value of -1 and a uppercase letter +1.

// Create a function that will recognize these different characters and return a value total.

// For Example:

// The string "thJHdd" would return -2 because it has two capital letters and 4 lowercase letters.
// (-1 * 4) + (1 * 2)

const countDifference = (input) => {
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = 0;

  for (let i = 0; i < input.length; i++) {
    let currentLetter = input[i];
    if (lowercase.includes(currentLetter)) {
      result -= 1;
    }

    if (uppercase.includes(currentLetter)) {
      result += 1;
    }
  }

  console.log(result);
  return result;
};

const input = "thJHdd";
const input2 = "GGGGG";
const input3 = "djfjkdskfd";
countDifference(input);
countDifference(input2);
countDifference(input3);
//Expected -2
