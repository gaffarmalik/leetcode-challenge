/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let [left, right] = [-1,-1];
    left = leftBias(nums, target, true);
    right = leftBias(nums, target, false);
    return [left, right];
};

//leftBias is true by default and false for rightBias
var leftBias = function(nums, target, leftBias){
    let start = 0, end = nums.length-1;
    let result = -1;
    while(start <= end){
        let mid = Math.floor(start + (end -start)/2);
        if(nums[mid] > target){
            end = mid-1; 
        }else if(nums[mid] < target){
            start = mid+1;
        }
        if(nums[mid] === target){
            result = mid;    
            if(leftBias === true) end = mid-1;
            else start = mid+1;
                
        } 
        
        // if(nums[mid] === target) result = mid;
    }
    
    return result;
}
