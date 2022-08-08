/**
 * LINK: https://leetcode.com/problems/unique-paths/
 * SOLUTION:
 * This is a classic DP/ Recursion Problem. To solve the problem recusrively, visualize your decision tree
 * if the person was to move either right or bottom. If M is 0, continue moving right by decreasing N (i.e N-1)
 * else if N is 0 continue descreasing M (M-1). If both M and N hit 0 return 1 (meaning 1 result found) .
 * Below your edge case, add up all the values as a result of either miusing 1 from N or minusing 1 from M.
 * Remember to use memoization to avoid TLE Error.
 * 
 * The Dp approach requires using a table/matrix to simulate the number of results applicable for each point/node.
 * Once the whole array is filled, check the rightmost-bottom for the answer. The logic is coined from the fact that,
 * the number of ways to get to a point in the matrix, is theh sum of the number of unique ways at the top + the number of unique ways 
 * at the left;
 * 
 */

var uniquePaths = function(m, n) {
    
    // using DP or memoize recursion
    
    //CREATE MATRIX
    const dp = [];
    for(let i=0; i< m; i++){
        dp[i] = [];
        for(let j=0; j< n; j++){
            dp[i][j] = 1;
        }
    }
    
    //iterate DP array
    
    for(let i=1; i< m; i++){
        for(let j=1; j< n; j++){
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    
    return dp[m-1][n-1];
};
