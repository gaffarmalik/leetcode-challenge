/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let N = nums.length;
    let left = 0;
    let right = N-1;
    
    // 0. TLDR,
    // 1. Find Pivot
    // 2. Search left group or right group depending on which limit target falls
    /**
     * SOLUTION:
     * This is a tricky array problem. But understanding the workings can help one formulate solutions
     * to more complex binary search problems.
     * The goal of this algorithm (approach) is to find the pivot point in the array between the
     * sorted set and the unsorted set. REMEMBER: Rotated arrays have atleast  2 sides (1 sorted, 1 unsorted);
     * To find the pivot, we try to find a number thats greater than the nums[N-1]. We can use O(N) or O(logN) - better.
     * Using O(logN), we run a binary search on nums with these rules:
     * - If nums[mid] is greater than nums[right], 
     * - move away from the sorted side towards the unsorted side,using (left = mid+1)
     * - else move towards the left using right = mid;
     * After running a BS to find pivot, we check if target falls in left or right of the array, using the index of the pivot 
     * from our previous operation
     * i.e if(target >= nums[left] && target <= nums[n-1]). Based on this condition we set left and right value for our next BS
     * Once we know this, we run a simple BS to search USING (left <= right) as limit
     * Our BS should find the index of the target and return 
     * return -1 at the bottom of your execution, just incase nothing was found
     * Thanks.
     * 
     */
  
    while(left < right){
        let mid = Math.floor((right+left)/2); //this is JS way of BS

        if(nums[mid] > nums[right]){
            left = mid + 1
        }else{
            right = mid;
        }
    }
    
    
    let start = left; 
    left = 0;
    right = N-1;
    
    if(target >= nums[start] && target <= nums[right]){
        left = start;
    }else{
        right = start;
    }
    
    
    while(left <= right){
        let mid = Math.floor((right+left)/2);
        
        if(nums[mid] === target) return mid;
        
        if(target > nums[mid]){
            left = mid+1;
        }else{
            right = mid-1;
        }
    }
        
        
    return -1;
    
};