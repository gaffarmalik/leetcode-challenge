/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    const memo = {};
    return left; //Math.min(left, right);

};

// Recursive but causes TLE

const recursion = (left, right,rem, arr, memo) => {
    // edge case and memoize
    
    const key = `${left}:${right}:${rem}`;
    if(memo[key]) return memo[key];


    if(rem < 0 || right < 0 || left >= arr.length) return -1;
    if(rem === 0) return 0;

    let ans = 0;

    let val = recursion(left+1, right, rem-arr[left], arr, memo);
    let val2 = recursion(left, right-1, rem-arr[right], arr, memo);
    
    if(val === -1 && val2 === -1) ans = -1; //memo[key] = -1;
    else if(val >= 0 && val2 >=0) ans = 1 + Math.min(val, val2);
    else if(val === -1 && val2 !== -1) ans = 1 + val2 ;
    else ans = 1 + val;
    
    memo[key] = ans;
   
    
    return memo[key];



}