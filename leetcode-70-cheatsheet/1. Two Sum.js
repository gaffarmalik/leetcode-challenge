/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


/**
 * EXPLANATION:
 * It's simple. Notice the prevMap and why it's named as so.
 * prevMap helps to keep map of {value:index}
 * Loop through each nums and get what's the diff necessary to meet target, 
 * if it's not available in the map, then none of the prev number matches the required diff at point i;
 * Remem ber to set value of i in prevMap, a future i may want to check for the diff.
 */
 var twoSum = function(nums, target) {

    const prevSum = {};
    
    for(let i=0; i < nums.length; i++){
        let diff = target- nums[i];
        
        //we're assured of an answer
        if(diff in prevSum) return [prevSum[diff], i ];
        
        prevSum[nums[i]] = i;
    }
    
};