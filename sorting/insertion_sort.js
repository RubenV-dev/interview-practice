function insertionSort2(arr) {
    for(let i = 1; i < arr.length; i++){
        let currentNum = arr[i]
        let j = i - 1

        while(j>=0 && arr[j] >= currentNum){
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = currentNum

    }
    return arr
}
const arr = [1, 4, 3, 5, 6, 2]
insertionSort2(arr)
console.log(arr)