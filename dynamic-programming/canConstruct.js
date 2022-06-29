// console.log("A");
// Find the number of combinations to form 7
// Using the fibonacci technique to solve the problem

function canConstruct(arr, targetString){
    if(targetString in memo) return memo[targetString];
    if(targetString === "") return true;

    const arr_result =[];
    for(let x of arr){
        if(targetString.indexOf(x) === 0 ){
            //compute next step
            const remainder = targetString.slice(x.length, targetString.length);
            const answer = canConstruct(arr, remainder);
            
            
            if(answer === true) {
                return true;
            }
        }
    }

    return false;

}

console.log(canConstruct(['ab','abc','cd','def','abcd'], "abcdef"))
console.log(canConstruct(['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'],"skateboard"))
console.log(canConstruct(['a', 'p', 'ent', 'enter', 'ot', 'o', 't'],"enterapotentpot"))
console.log(canConstruct(['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'],
"eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeoooeeeeeeeeeeeeeef"))//slow sample
