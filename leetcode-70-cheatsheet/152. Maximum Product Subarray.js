/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    let max  = nums[0];
    let minProd = nums[0];
    let maxProd = nums[0];
    
    let k=1;
    while(k < nums.length){
         let temp = maxProd;
         maxProd = Math.max(nums[k]* minProd, nums[k]*maxProd, nums[k] );
         minProd = Math.min(nums[k] * minProd, nums[k]* temp, nums[k]);   
         max = Math.max(max,maxProd)
        
         k++;
    }
    
    
    
    return max;
};