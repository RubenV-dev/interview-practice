let icecreamParlor = (m, arr) => {
    let moneyPooled = m
    let indexes = []

    for(let i = 0; i < arr.length; i++){
        let currentPrice = arr[i]
        for(let j = i + 1; j < arr.length; j++){
            if(currentPrice + arr[j] === moneyPooled){
                console.log([i +1, j+1])
                //we add one to each index due to the problem wanting one based indexing
                return [i + 1, j + 1]
            }
        }

    }
    return indexes
}

// let icecreamParlor0 = (m, arr) => {
//     let hashmap = {}

//     for(let i = 0; i < arr.length; i++){
//         if(hashmap[arr[i]]){

//             console.log("HIT", [i + 1, hashmap[arr[i]]] )

//             if(i + 1 < hashmap[arr[i]]){
//                 return [i + 1, hashmap[arr[i]]]
//             }else{
//                 return [hashmap[arr[i]], i + 1]
//             }
//         }
//         hashmap[ m - arr[i]] = i+1
//     }

//     return "None"
// }


const icecreamParlor0 = (cost, arr) => {
    let hashmap = {}
    for(let i = 0; i < arr.length; i++){
        let currentPrice = arr[i]
        let complement = cost - arr[i]

        if (!hashmap[currentPrice]){
            hashmap[complement] = i
        } else {
            if( i < hashmap[currentPrice]){
                console.log([i + 1, hashmap[currentPrice] + 1])
                return[i + 1, hashmap[currentPrice] + 1]
            }
            console.log([hashmap[currentPrice] + 1, i + 1])
            return [hashmap[currentPrice] + 1, i + 1]
        }
    }
    console.log("None")
    return "None"
}

// icecreamParlor(4, [1, 4, 5, 3, 2])

// icecreamParlor(4, [2, 2, 4, 3])

icecreamParlor0(9, [1, 3, 5, 6, 7, 8])
// icecreamParlor(8, [1, 3, 4, 4, 6, 8])
// icecreamParlor(3, [1, 2])