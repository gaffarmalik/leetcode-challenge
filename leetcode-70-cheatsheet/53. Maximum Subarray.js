/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    //kadane's algorithm
    /**
     * EXPLANATION
     * Kadane's algorithm is a dynamic programming algorithm.
     * In this algorithm, we are going for quality over quantity
     * We add j to currentSum as j moves towards the end of the array.
     * If j hits a number that's greater than our currentSum + nums[j], them we replace currentSum with that NUmber.
     * We also replace max with that number since it's the new champion. Why? (Quality over Quantity);
     * Max would be our final answer
     */

    let max, currSum;
    max = currSum = -Infinity;
    let j = 0;
    let N = nums.length;
    
    while(j< N){
        
        if(nums[j] >= nums[j] + currSum){
            currSum = nums[j];
        }else{
            currSum += nums[j];
        }
        
        max = Math.max(max, currSum);
        
        j++;
    }
    
    return max;
};