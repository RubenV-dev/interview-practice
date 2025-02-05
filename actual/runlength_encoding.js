const encoder = (inputStr) => {

    if (inputStr === null || inputStr.length < 1) return ""
    const inputArr = inputStr.split("")
    let counter = 0
    let prevChar = 0
    let str = " "

    for(let i = 0; i < inputArr.length; i++){
        let currentChar = inputArr[i]
        if(currentChar === prevChar){
            counter++;
        } else if (prevChar != 0){
            str += counter + prevChar
            prevChar = currentChar
            counter = 1
        } else if (prevChar === 0){
            counter = 1
        }
        prevChar = currentChar;
        
    }

    str += counter + prevChar

    return str
}

const decoder = (input) => {
    let str = ""
    let inputArr = input.split("")

    for(let i = 0; i < inputArr.length; i++){
        let currentChar = inputArr[i]
        
    }
}

// const result = encoder("aaabbcc")
// console.log(`Expected: 3a2b2c Actual:${result}`)

// const result2 = encoder("aaaaabbbcccc")
// console.log(`Expected: 5a3b4c Actual:${result2}`)

const result3 = decoder("4a3b2c")
console.log(`Expected: aaaabbbcc Actual:${result3}`)