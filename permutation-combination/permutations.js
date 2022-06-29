//  Solution 1

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
     
    let result = [];
       
       
    const dfs = (i, nums) => {
       
        if(i === nums.length){
           result.push([...nums]);
            return;
        }
        
        for(let j=i; j< nums.length; j++){
           [nums[i], nums[j]]  = [nums[j], nums[i]];
           dfs(i+1, nums);
           [nums[i], nums[j]] = [nums[j], nums[i]];
            
        }
    }
       
    dfs(0,nums);
    return result;
       
   };
   
   //Solution 2;
   /** 
    * This technique avoids mutating the original nums array
    * 
    * 
    */

   /**
 * @param {number[]} nums
 * @return {number[][]}
 */
// let result = []
var permute = function(nums) {
     
    return dfs(0, nums);
     
 };
 
 
 
 
 const dfs = (i, nums) =>{
     let result = [];
     if(nums.length === i){
         return [[...nums]];
     }
     
     for(let j=i; j< nums.length; j++){
         let temp = [...nums];
         [temp[i], temp[j]] = [temp[j], temp[i]];
         result.push(...dfs(i+1, temp));
     }
     return result;
 }
 