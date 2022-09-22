/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
/**
 * How to
 * Keep a sum of all even numbers in a variable
 * for each query do this:
 * i. minus the ops from evenSum; why? even if the number at i is even, you'd still minus it first
 * ii. Add ops to the number at i
 * iii. If this operation (addition), results in an even number, add it to evenSum
 * iv. else, skip it. You wouldn't need to add an odd result
 * 
 * 
 */
 var sumEvenAfterQueries = function(nums, queries) {
    let result = [];
    let evenSum = 0;
    
    // sum all even numbers
    for(let x of nums){
        if(x%2 === 0) evenSum+=x;
    }
        
    for(let y of queries){
        const [ops, point] = y;
        
        if(nums[point]%2 === 0){
            evenSum -= nums[point];
        }
        
        nums[point] =  nums[point]+ops;
        
        if(nums[point] %2 === 0){
            evenSum += nums[point];
        }
        
        result.push(evenSum);
    }
    console.log(nums)
    return result;
    
    
};