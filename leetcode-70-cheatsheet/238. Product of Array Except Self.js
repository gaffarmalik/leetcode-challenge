/**
 * @param {number[]} nums
 * @return {number[]}
 */

/**
 * EXPLANATION:
 * Very simple!
 * Solution to every item i in the array is a product of all items from L --> R and items from R ----> L
 * For each item at i use leftArr[i] to store product of all before i, from L to R
 * For each item at i use rightArr[i] to store product of all before i from R to L;
 * Finally loop thru both using N as limit (both arrays are of size N also), and MULTIPLY leftArr[i] by rightArr[i];
 * Then, you'd have your result;
 */
 var productExceptSelf = function(nums) {
    //Multiply all numbers
    const rightArr = [];
    let result = [];
    const leftArr = [];
    let N = nums.length;
    let prevL =1;
    let prevR =1;
    
    for(let i=0; i< N; i++ ){
        let rightL = N - i -1;
        leftArr[i] = prevL;
        rightArr[rightL] = prevR;
        
        prevL*= nums[i];
        prevR *= nums[rightL];
        
    }
    
    for(let i=0; i < N; i++){
        result[i] = leftArr[i] * rightArr[i];
    }
    return result;
};
