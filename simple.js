
var searchInsert = function(nums, target) {
    let si = 0;
    let left =0;
    let right = nums.length -1;
    if(nums[0]> target) return 0;
    if(nums[right] < target) return nums.length;
    
    for(let i=0; i< nums.length; i++){
        if(nums[i] === target) return i;
        else if(target > nums[i] && target < nums[i+1]) si= i+1;
    }
    return si
    
//     while(left<=right){
//         let middle = Math.floor((left+right)/2);
//         if(target === nums[middle]) return middle;
//         else if(target < nums[middle]) right = middle -1;
//         else left = middle+1;
//     }
    
//     return left;
};

