/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    const dp = [[1]];
    if(numRows == 1) return dp;

    for(let i=1; i< numRows; i++){
        dp[i] = new Array(dp[i-1].length +1);
        let localLen = dp[i].length;
        dp[i][0] = 1;
        dp[i][localLen-1] = 1;
        
        for(let j=1; j< localLen-1; j++ ){
            dp[i][j] = dp[i-1][j] + dp[i-1][j-1] || 0;
        }
    }
    
    return dp;
};