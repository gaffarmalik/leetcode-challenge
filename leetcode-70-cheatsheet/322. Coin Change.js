/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * 
 * Suboptimal Solution
 */
 var coinChange = function(coins, amount) {
    if(amount === 0) return 0
    return recursor(coins, amount, 0 );
    
};

const recursor = (coins, remainder,total ) =>{
    // let min = Infinity;
    let minArr = [];
    if(remainder < 0) return -1;
    if(remainder === 0) return total;

    for(let i=0; i< coins.length; i++){ 
        let x = recursor(coins, remainder - coins[i], total+1); //not total++
        if(x === -1) continue;
        minArr.push(x);
    }

// console.log(minArr)
    return minArr.length > 0 ? Math.min(...minArr): -1;
}

/**
 * Optimal Solution
 * 
 */

 var coinChange = function(coins, amount) {
    //easy
    const dp = new Array(amount+1).fill(Infinity);
    dp[0] = 0;
    
    for(let coin of coins){
        for(let i = 0; i < dp.length; i++){
            if(coin <= i){
                let rem = dp[(i - coin)] + 1;
                dp[i]  = Math.min(dp[i], rem)
            }
        }
    }
}