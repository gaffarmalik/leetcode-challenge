var maxSubArray = function(nums) {
    let i=0;
    // let j=0;
    let largestSum = Number.MIN_SAFE_INTEGER;
    let currentLargestSum = 0;

    for (let j=0; j < nums.length; j++){
    // [i]   
    // [-2,1,-3,4,-1,2,1,-5,4];
    // [   j]
    if(nums[j] > currentLargestSum + nums[j]){
            currentLargestSum = nums[j];
            i = j;
    }else{
        currentLargestSum += nums[j];
    }
    largestSum = Math.max(currentLargestSum, largestSum);
    
    }

    return largestSum;
};