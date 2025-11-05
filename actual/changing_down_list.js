//This question had the premise of propogating changes down a list.

// Given an array [3,5,5, 2, 5] we want a program that will find the first non leading 0, record that value
//  and then propogate changes down the list by subtracting that value from the next number provided the
// number you are subracting from is larger than the value you are subtracting. We can assume the program will contnue
// to run until we get to an array of [0,0,0,0,0]

// For example, Given [3,5,5,2,5] the result would be 8.

// Explanation:

// [3 , 5, 5, 2, 5]
// The first leading-non-Zero is 3. so subtract that and continue until you find a number
// that you cant subtract from. Add that value to your result

// [0, 2, 2, 2, 5]
// We subtracted from index 0,1,2 because the numbers were large enough to subract from.
// We stopped at index 3 because the value 3 cannot be subtracted from 2.

// [0,0,0,0,3]
// we found the next nonleadzero to be 2 so we subtract that down each index.We also add that to our result

// we found the next non leading 0 is 3 so we subtract that from the correct indexes and add that value to the result

// Overall we found 3 nonleading zeroes 3 + 2 + 3 = 8. So the result of our program is 8.

// Given input [ 3,5,5,2,5]  return 8

const changingDownList = (input) => {
  let result = 0;
  let step = 0;
  let index = 0;
  let temp = 0;

  while (step < input.length) {
    let pointerNum = input[index];

    if (temp !== 0 && pointerNum >= temp) {
      input[index] = pointerNum - temp;
    }

    if (pointerNum !== 0 && temp === 0) {
      temp = pointerNum;
      input[index] = pointerNum - temp;
      result += temp;
    }

    index += 1;

    if (index > input.length - 1 || (temp !== 0 && pointerNum < temp)) {
      index = 0;
      temp = 0;
      step += 1;
    }
  }

  console.log(result);
  return result;
};

input = [3, 5, 5, 2, 5]; //Expected 8
//02225 - 3
//00003 - 2
//00000 - 3
//3+3+2 = 8
input2 = [2, 5, 5, 3, 6]; //Expected 9
//03314 - 2
//00014 - 3
//00003 - 1
//00000 - 3
//2+3+1+3 = 9
changingDownList(input);
