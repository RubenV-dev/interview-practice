const fibNumber = (n) => {
    //we need to return the nth fib number
    //so if given 3, we would give 0 1 1 2 3 5 8 13
    //3rd element in this list of numbers is 1
    //can fib handle negative numbers? none
    if(n <= 0) return "None"
    if(n === 1 ) return 0
    if(n === 2) return 1

    let sum = fibNumber(n - 1) + fibNumber(n - 2)

    return sum
}

let answer = fibNumber(-2)
console.log(answer)