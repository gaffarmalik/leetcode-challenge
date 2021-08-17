function howSumTabulation(target, numBank){
const array = Array(target + 1).fill(null);
array[0] =[];

for(let i=0; i <= array.length; i++){
    if(array[i] !== null){
        for(let j=0; j<= numBank.length; j++){
        if( i+numBank[j] < array.length) array[i+numBank[j]] = [...array[i], numBank[j]];

        }
    }
}
// console.log(array.length)

return array[target];
}

console.log(howSumTabulation(10, [2,30,50]));