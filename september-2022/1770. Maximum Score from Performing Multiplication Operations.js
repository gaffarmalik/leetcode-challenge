/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */


 var maximumScore = function(nums, multipliers) {
    // current multiplier can be tracked with variable i
    // current nums would be tracked with variable j & k (start & finish)
    // base-case is if nums is exhausted i.e start  === finish
    // then we can compare from bottom to top for max total
    // DP Top-bottom but results to TLE Error
    let score = 0;
    let hash = {};
    return dp(nums, multipliers, [0, nums.length-1], 0, hash);
    
};

function dp(nums, multipliers, [j, k], i, hash){
  
    if(i === multipliers.length) return 0 ; 
    
    let start = nums[j] * multipliers[i];
    let end = nums[k] * multipliers[i];
    const finder = j.toString() + ':' + k.toString() + ':'+ i.toString();
    
    if(hash[finder]) return hash[finder];

    // console.log(hash)
    let startDp = start + dp(nums, multipliers, [j+1, k], i+1 , hash);
    let endDp =  end + dp(nums, multipliers, [j, k-1], i+1 , hash)
    
    let ans = Math.max(startDp, endDp);
    hash[finder] = ans;
    return ans;
}