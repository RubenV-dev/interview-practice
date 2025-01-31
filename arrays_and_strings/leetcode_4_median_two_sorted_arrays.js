const medianSortedArr = (nums1, nums2) => {
    let pointerA = 0
    let pointerB = 0
    let newArr = []
    let expectedArrLength = nums1.length + nums2.length
    let i = 0
    let medianIndex;
    let secondMedianIndex;

    while (i < expectedArrLength) {
        let number1 = nums1[pointerA]
        let number2 = nums2[pointerB]
        if(number1 < number2){
            newArr.push(number1)
            pointerA++;
            i++;
        } else if (number2 < number1) {
            newArr.push(number2)
            pointerB++;
            i++;
        } else {
            if(number1 != undefined) {
                newArr.push(number1);
                pointerA++;
                i++;
            }
            if(number2 != undefined) {
                newArr.push(number2)
                pointerB++;
                i++
            }
        }
    }

    if(expectedArrLength % 2 !== 0){
        medianIndex = Math.floor(expectedArrLength / 2)
    } else {
        medianIndex = (expectedArrLength / 2) - 1
        secondMedianIndex = medianIndex + 1
    }

    if(!!secondMedianIndex) {
       return (newArr[medianIndex] + newArr[secondMedianIndex]) / 2
    }

    return newArr[medianIndex]
}

let result = medianSortedArr([1,3], [2,4])
console.log(result)