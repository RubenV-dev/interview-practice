let mergesort = (arr, tempArr, leftStart, rightEnd) => {
    tempArr = tempArr || []
    leftStart = leftStart || 0
    //something with the logic here isnt working out well.
    rightEnd = rightEnd || arr.length
    if(leftStart >= rightEnd){
        return;
    }
    let middle = Math.floor((leftStart + rightEnd) / 2)
    mergesort(arr, tempArr, leftStart, middle)
    mergesort(arr, tempArr, middle + 1, rightEnd)
    mergeHalves(arr, tempArr, leftStart, rightEnd)

}

let mergeHalves = (arr, temp, leftStart, rightEnd) => {
    let leftEnd = (rightEnd + leftStart) / 2
    let rightStart = leftEnd + 1
    let size = rightEnd - leftStart + 1

    let left = leftStart;
    let right = rightStart;
    let index = leftStart;

    while(left <= leftEnd && right <= rightEnd){
        if(arr[left] <= arr[right]) {
            temp[index] = arr[left]
            left++;
        } else {
            temp[index] = arr[right];
            right++;
        }
        index++
    }

    for(let i = left; i < leftEnd - left + 1; i++){
        arr[i] = temp[index];
        index++;
    }
    for(let i = right; i < rightEnd - right + 1; i++){
        arr[i] = temp[index];
        index++;
    }
    for(let i = leftStart; i < size; i++){
        temp[i] = arr[i];
    }

    return arr
}

let arr = [5, 8, 1, 3, 7, 9, 2]
mergesort(arr)
console.log(arr)