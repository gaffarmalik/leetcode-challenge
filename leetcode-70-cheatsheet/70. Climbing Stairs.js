/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    //DP PROBLEM
    //memoization doesnt work here, so we use fibonacci style

    let arr = new Array(n);
    arr[0] = 1;
    arr[1] = 2;

    for(let i=2; i< arr.length; i++)
        arr[i] = arr[i-1] + arr[i-2];
    

    return arr[n-1]
};