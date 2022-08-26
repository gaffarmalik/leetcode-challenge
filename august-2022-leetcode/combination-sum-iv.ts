function combinationSum4(nums: number[], target: number): number {
    return recursion(nums, target, {});
};



function recursion(nums: number[], target: number, memory: any){
    //base case
    if(target === 0) return 1;
    let count = 0;
    if(`--${target}` in memory) return memory[`--${target}`];

    for(let i=0; i< nums.length; i++){
        if(target >= nums[i]){
            memory[`--${target-nums[i]}`] = recursion(nums, target-nums[i], memory);
            count += memory[`--${target-nums[i]}`];
        }
           
    }
    
    return count;
}