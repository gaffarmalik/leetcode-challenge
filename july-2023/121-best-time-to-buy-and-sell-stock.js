/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    // Goal is to buy at lowest price and sell at the highest price;
    // Get the lowest price before i reach ith point
    let min = Number.MAX_VALUE;

    let result = 0;
    for(let price of prices){
        if(price < min) min = price;
        else if (price > min){
            result = Math.max(result, price - min);
        }
    }


    return result;
};