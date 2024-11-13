//sliding window palindrome MICRO1

//You are creating a packet analyzer that looks at stream data. It is looking for a sliding window that looks for the longest palindrome that skips 1 letter.
//If it is less than 4 characters it returns 0 as the length of the longest palindrome
//returns the length of the longest palindrome

//Example abba returns 4
//abcba returns 4 since it can skip the c and look at just abba


let test = "abba"

const longestPalindrome = (inputStr) => {
    if(inputStr.length < 4) return 0

    let longestPalindrome = ""
    let stack = []
    for(let i = 0; i < inputStr.length; i++){
        let currentLetter = inputStr[i]
        if(stack[stack.length - 1] !== currentLetter) {
            stack.push(currentLetter)}
        else{
        stack.pop()
        }
    }
    if(stack.length === 0){
        return inputStr.length
    }
}
//returns 4
console.log(longestPalindrome(test))