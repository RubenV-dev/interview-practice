//Create a function powerOfN where it returns true if a given number is a power of 4.
//Ex. If given 16, returns true because 4^2 is 16.

//We will use recursion 
const powerOfN = (n) => {
    if (n === 1) return true;
    if (n <= 0) return false;
    if (n % 4 !== 0) return false;

    return powerOfN(n/4)
}

//
const example = powerOfN(16)
console.log(example)