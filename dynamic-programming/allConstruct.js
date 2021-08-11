// Find all the possible combinations of substring that can construct a word;
let arr =['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']

function allConstruct(target, wordBank){
//Base Case
if(target === "") return [[]];
const result = [];

for(let word of arr){
    if(target.indexOf(word) === 0){
        const suffix = target.slice(word.length);
        const suffixWays = allConstruct(suffix, wordBank);
        const targetWays = suffixWays.map(way => [ word, ...way])
        result.push(...targetWays);
        
        }
}

return result;

}

console.log(allConstruct('abcdef', arr))
