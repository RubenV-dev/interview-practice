//return true or false depending on whether or not a number is colorful
//Colorful Number: When in a given number, the product of every contiguous sub-sequence is different. 
// That number is called a Colorful Number. 

//Ex: 3245
//return true

//3 2 4 5 3*2 4* 3*2*4 2*2*5

let isColorful = (number) => {
    let string = String(number)
    let set = new Set()

    // for(let i = 0; i < string.length; i++){
    //     let current = parseInt(string[i])
    //     let product = 1 //running count of products
    //     // console.log(" what the", "HIT")
    //     for(let j = 0; j < string.length; j++){
    //         let secondPointer = string[j]
    //         product = string[j] - "0"
    //         if(set.contains(product)){
    //             return false
    //         } else {
    //             set.add(product)
    //         }
    //     }
    // }

    for (let i = 0; i < string.length; i++) {
        let product = 1;
        for (let j = i; j < string.length; j++) {
            product *= (string.charAt(j) - '0');
            if (set.has(product)) {
                return false;
            } else {
                set.add(product);
            }
        }
    }
    console.log(set)
    return true
}

isColorful(3245)