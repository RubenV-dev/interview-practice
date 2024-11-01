// var isAnagram = function(s, t) {
//     let letters = "abcdefghijklmnopqrstuvwxyz".split("")
//     let arr1 = s.split("")
//     let arr2 = t.split("")

//     for(let i = 0; i < arr1.length; i++){
//         letters[arr1[i].charCodeAt() - 'a'.charCodeAt()]++;
//     }
//     for(let i = 0; i < arr2.length; i++){
//         letters[arr2[i].charCodeAt() - 'a'.charCodeAt()]--;
//     }

//     for(let letter in letters){
//         if(letter !== 0){
//             console.log("false")
//             return false
//         }
//     }
//     console.log("true")
//     return true;
// }
//uses asci values to determine that each index stays at 0

const Anagram = (s, t) => {
    if(s.length !== t.length) return false

    let map = {}

    for( let c of s){
        map[c] = (map[c] || 0) + 1
    }

    for(let c of t){
        if((!map[c] || map[c] == 0)) return false
        map[c]--;
    }

    return true
}

let string1 = "anagram"
let string2 = "nagaram"

isAnagram(string1, string2)