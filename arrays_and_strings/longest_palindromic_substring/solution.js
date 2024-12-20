let longestPalindrome = (s) => {
    if(s.length < 1) return " "

    let result = ""
    let resultLength = 0

    //address both odd and even length palindromes

    for(let i = 0; i < s.length; i++){
        // odd length
        let left = i
        let right = i

        while(left >= 0 && right < s.length && s[left] === s[right]){
            if((right - left + 1) > resultLength){
                result = s.slice(left, right + 1)
                resultLength = right - left + 1
            }
            left -= 1;
            right += 1;
        }

        //even length
        left = i
        right = i+1
        while(left >= 0 && right < s.length && s[left] === s[right]){
            if((right - left + 1) > resultLength){
                result = s.slice(left, right + 1)
                resultLength = right - left + 1
            }

            left -= 1
            right += 1
        }
    }

    return result


}

let test = "abba"
//Expected "aba"
console.log(longestPalindrome(test))