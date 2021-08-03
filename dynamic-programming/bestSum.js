// console.log("A");
// Find the number of combinations to form 7
// Using the fibonacci technique to solve the problem

function bestSum(arr, targetSum, store = {}){
    if(targetSum in store) return store[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    let shortestCombo =  null;

    for(let x of arr){
        const remainder = targetSum - x;
        const hos = bestSum(arr, remainder, store);

        if( hos !== null){

            let val = [...hos,x];
            if(shortestCombo === null || val.length < shortestCombo.length ){
                shortestCombo = val;
            }
        }
    }

    store[targetSum] =  shortestCombo;

    return shortestCombo;

}
let arr = [23,2, 14];

console.log(bestSum([1,2,5,25], 100))
