function bestSumTabulation(target, numBank){
const array = Array(target + 1).fill(null);
array[0] =[];

for(let i =0; i<= target; i++){
    if(array[i] != null){
        for(let num of numBank){
            const now =  [...array[i], num];
            const before = array[i + num]; 
            if((before &&  now.length < before.length) || before === null){
                array[i+num] = [...array[i], num];
            }
        }
    }
}

return array[target];
}

console.log(bestSumTabulation(20000, [2,2,5,5, 10, 10, 1, 5001]));