// console.log("A");
// Find the number of combinations to form 7
// Using the fibonacci technique to solve the problem

let arr = [23,2, 14];
function howSum(arr, targetSum){

    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    let shortestCombo =  null;

    for(let x of arr){
        const remainder = targetSum - x;
        const hos = howSum(arr, remainder);
        console.log(hos)

        if( hos !== null){
            let val = [...hos,x];
            if(shortestCombo === null || val.length < shortestCombo.length ){
                shortestCombo = val;
            }
        }
    }

    return shortestCombo;

}

console.log(howSum(arr, 14))
