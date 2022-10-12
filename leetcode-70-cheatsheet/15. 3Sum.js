/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    // I'm back
    const result = [];
    let N = nums.length;
    if(N < 3) return result;

    nums = nums.sort((a,b)=> a-b); // O(NlogN)
    console.log(nums);
    console.log(nums.length)
    for(let i=0; i< nums.length; i++){
        console.log( i);

        let left = i+1;
        let right = N-1;
        if(i > 0 && (nums[i] === nums[i-1])) continue;

        while(left < right){
            const sum = nums[i] + nums[left] + nums[right];
            if(sum > 0){
                right-=1;
            }else if(sum <0){
                left+=1;
            }else{
                result.push([nums[i], nums[left], nums[right]]);
                //we've found a result

                left+=1;
                while(nums[left-1] === nums[left] && left < right){
                    left+=1;
                }

            }
            // console.1log(i)
        }

    }
            return result;

};