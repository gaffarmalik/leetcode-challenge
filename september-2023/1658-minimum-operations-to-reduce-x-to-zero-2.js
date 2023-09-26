/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    
    // Using Sliding window
    let left = 0;
    let right =0;
    let total = nums.reduce((a,b) => a+b);
    let target = total -x;
    let curr_sum = 0;
    let max_window = -1 // Number.MIN_SAFE_INTERGER;
    
    
    while(right < nums.length){
    
        curr_sum = curr_sum + nums[right];
    
        while(left <= right && curr_sum > target){
            curr_sum = curr_sum - nums[left];
            left++;
        }
    
          if(curr_sum === target) {
            max_window = Math.max(max_window,  right - left +1);
        }
    
        console.log(left, right, right-left);
    
        right++;
    }
    console.log(total,max_window, target)
    return max_window < 0? -1 : nums.length - (max_window);
    };
    
    