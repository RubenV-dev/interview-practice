//Given an arr of stock prices, create a solution that returns when it would be best to buy and sell a stock assuming you can only buy one stock and sell on a different day

//Ex. Given [7, 1, 4, 6, 5] we would return 5 because that is what would give us the greatest profit buying at 1 and selling at 6.

const bestProfit = (arr) => {
    //min = 1, max=3
    let minPrice = Number.POSITIVE_INFINITY; 
    let maxProfit = 0;

    for(let i = 0; i < arr.length; i++){
        let currentPrice = arr[i]

        if (currentPrice < minPrice) {
            minPrice = currentPrice
        }

        profit = currentPrice - minPrice

        if ( profit > maxProfit) {
            maxProfit = profit
        }
    }

    return maxProfit

}

//[7, 6, 5, 3, 1]
const arr = [7, 1, 4, 6, 5]
// const arr = [7, 9, 4, 8, 1]
console.log(bestProfit(arr))