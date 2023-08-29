/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums){
    // Multiply to left;
    // Multiply to right;
 
    let LArray = [], RArray = [];
    let result = [];
    let LAcc =1, RAcc =1;
 
    let N = nums.length;
     
 
  for(let i=0; i< N; i++){
      let currL = nums[i-1] === undefined ? 1: nums[i-1];
      let currR = nums[N-i] === undefined ? 1 : nums[N-i];
      LAcc *= (currL);
      RAcc *= (currR);
 
      LArray[i] = LAcc;
      RArray[N-i-1] = RAcc;
  }
 
 
  for(let i=0; i< nums.length; i++){
      result[i] = RArray[i] * LArray[i];
  }
 
  
 
 
 
  return result;
 
 };