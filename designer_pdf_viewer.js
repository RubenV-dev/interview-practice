function designerPdfViewer(h, word) {
    // Write your code here
    let max = 0
    let letterString = "abcdefghijklmnopqrstuvwxyz"
    let codeHashmap = {}
    
    for (let i = 0; i < h.length; i++) {
        codeHashmap[letterString.charAt(i)] = h[i]
    }
    
    for (let j = 0; j < word.length; j++) {
        max = Math.max(max, codeHashmap[word[j]])
    }
    
    console.log(max * word.length)
    return max * word.length
    
}

let h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,5, 5, 5]
let input = "abc"

designerPdfViewer(h, input)