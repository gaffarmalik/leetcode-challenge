/**
 * @param {number[]} prices
 * @return {number}
 */
/**
 * EXPLANATION:
 * Our goal is simply to find the lowest value to sell at any point, while we move thru the prices
 * if price x is lesser than our  lowest value(preferred buying point), we update min_value;
 * If we find a deal where diff between price[x] and min_value is greater than current max_profit, then 
 * we update max_profit
 * Simple!
 */
 var maxProfit = function(prices) {
    //trying to find max difference
    let min_value = Number.MAX_VALUE;
    let max_profit = 0;
    
    for(let x=0; x< prices.length; x++){
        if(prices[x] < min_value){
            min_value = prices[x];
        }else if(prices[x] - min_value > max_profit){
            max_profit = prices[x] - min_value;
        }
    }
        
    console.log(Math.MAX_VALUE)
    return max_profit;
    
};