function rotLeft(a, d) {
    // Write your code here
    if (d === 0 || d === a.length) {
        return a;
    } else {
        var temparr = a;
        while (d > 0) {
            var placeholder = temparr.shift();
            if (!placeholder) {
                return temparr;
            }
            temparr.push(placeholder);
            let temp = d -=1
            console.log(temparr)
            return rotLeft(temparr, temp);
        }
        // console.log(temparr);
        // return temparr;
    }
}

function rotLeft1(a , d){

    if(d === 0 || d === a.length || a.length % d === 0 ){
        console.log("Hey i was hit", a)
        return a
    }

    while (d > 0) {
        let placeholder = a.shift()
        a.push(placeholder)
        d -=1
    }
    console.log(a)
    return a

}

function rotLeft2(a, d) {
    let length = a.length
    let rotatedArray = []

    // rotatedArray[0] = 3
    // rotatedArray[1] = 1
    // rotatedArray[2]= 2

    for( let i = 0; i < length; i++) {
        rotatearray[0] = 2  ==> a[2] (i + d) % length
        rotatedArray[i] = a[(i + d) % length]
        console.log(rotatedArray)
    }
    return rotatedArray
}
//Test Cases
//input (d= 4) (Array = [1, 2, 3, 4, 5])
//Expected 5 1 2 3 4

rotLeft2([1, 2, 3], 2)
// rotLeft1([1, 2, 3], 2)

//1 2 3
//2 3 1
//3 1 2 
