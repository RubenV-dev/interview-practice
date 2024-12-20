let longestPalindrome = (s) => {
    let res = ""
    let resLen = 0

    for(let i = 0; i < s.length; i++){
        //odd
        [length, left, right] = expandFromIndex(s, i, i)
        if(length > resLen){
            res = s.slice(left, right + 1)
            resLen = right - left + 1
        }
        //even
        [length, left, right] = expandFromIndex(s, i, i + 1)
        if(length > resLen){
            res = s.slice(left, right + 1)
            resLen = right - left + 1
        }
    }

    return res
}

let expandFromIndex = (s,left, right) => {
    if (s === null || right < left) {
        return 0
    }
    while(left >= 0 && right < s.length && s[left] === s[right]){
        left -= 1;
        right += 1
    }
    //why do we do this increment and decrement???????????????
    left += 1
    right -= 1
    return [right - left + 1, left, right]
}

let test = "abba"
console.log(longestPalindrome(test))