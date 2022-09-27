/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * EXPLANATION
 * Classic Binary Search Problems.
 * Binary Search solutions tend to divide aproblem set into 2 portions:
 * 1. the side with the solution
 * 2. the side without the solution
 * 3. The side withpout the solution is written off
 * How does Binary search work in this scenario?
 * By default the array of nums is in ascending order and rotating the array can result
 * to an array that's unsorted as a whole.
 * One unique xtics of the unique array is, the answer to the question lies at a pivot point where,
 * the i-1 (prev item) is greater than i;
 * We need to use BS to reduce our solution to this.
 * - WHile left < right....
 * - Mid is a Pivot
 * - If you notice a side that's sorted (inclusive of mid), move left to mid +1;
 * - This means you've dicarded left;
 * - else move right to mid-1;
 * - This means you've discarded right;
 * - As with every BS question try to find your target on every iteration which is
 * - if(nums[mid] < nums[mid-1]) return nums[mid];
 * - You can always be rest assured that nums[left] would be your answer just incase your loop didn't get it.
 */
 var findMin = function(nums) {
    let N = nums.length;
    let left = 0;
    let right = N-1;
    
    while(left < right){
        let mid = Math.ceil((left+right)/2);
        if(nums[mid] < nums[mid-1]) return nums[mid];
        else if(nums[mid] > nums[left] && nums[mid] > nums[right]){
            left = mid+1;
        }else{
            right = mid -1
        }
    }
    return nums[left];
};