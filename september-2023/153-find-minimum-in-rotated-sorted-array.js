/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

    let left = 0;
    let right = nums.length -1;
   
    while(left < right){
        let mid = Math.ceil((left+right)/2);
        console.log(mid, left, right);
        if(nums[mid] < nums[mid-1]) return nums[mid];
   
        if(nums[left] < nums[mid] && nums[mid] > nums[right]){
            left = mid +1;
        }else{
          right = mid-1;  
        }
    }
   
    return nums[left];   
       
   };