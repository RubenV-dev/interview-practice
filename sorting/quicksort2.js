let quicksort = (arr, left, right) => {
    left = left || 0
    right = right || arr.length - 1

    let pivot = partition(arr, left, right)

    if(left < pivot - 1){
        quicksort(arr, left, pivot - 1)
    }
    if(right > pivot){
        quicksort(arr, pivot, right)
    }
    return arr
}

let partition = (arr, left, right) => {
    let pivot = Math.floor((right+left)/2)
    while(left <= right){
        while(arr[left] < arr[pivot]){
            left++;
        }
        while(arr[right] > arr[pivot]){
            right--;
        }
        if(left <=right){
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++;
            right--;
        }
    }
    console.log(arr)
    return left
}
let arr = [5, 8, 1, 3, 7, 9, 2]
quicksort(arr)
console.log(arr)