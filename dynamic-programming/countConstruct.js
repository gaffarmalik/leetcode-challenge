// console.log("A");
// Find the number of combinations to form 7
// Using the fibonacci technique to solve the problem

function countConstruct(arr, targetString){
    if(targetString === "") return 1;

    var count = 0;
    for( let x of arr ){
        if(targetString.indexOf(x) === 0 ){
            // console.log("a")
            const remainder = targetString.slice(x.length, targetString.length);
            const answer = countConstruct(arr, remainder);
            count+= answer;
        }
}
// console.log(count)
return count;


}

console.log(countConstruct(['ab','abc','cd','def','abcd'], "abcdef"))
console.log(countConstruct(['bo', 'ard', 'ate', 'at', 'ska',"skateboard", 'sk', 'board'],"skateboard"))
// console.log(countConstruct(['a', 'p', 'ent', 'enter', 'ot', 'o', 't'],"enterapotentpot"))
// console.log(countConstruct(['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'],
// "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeoooeeeeeeeeeeeeeef"))//slow sample
