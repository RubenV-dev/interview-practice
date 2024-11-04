// What Javascript statement in place of "?" will make the result always be between 6 and 7? 
const x = 2; 
let y = 4; 

function update(arg) { return Math.random() + y * arg; } 
//Math.random returns a number d where  0 < d < 1

y = 2; 
//?; //this is what we are looking to fill
y = 3;

//prior to my line... hardcoded arg of x = 2 and y value y = 2 returns nums between 4 < d < 5

const result = update(x);
//hardcoded 2 for x value

console.log(result)