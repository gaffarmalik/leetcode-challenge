
//Find the smallest sum of number to be >= 8
function findSmallestSum(array,smallest){
    let windowsStart =0;
    let currentSum = 0;
    let minWindowSize = Number.MAX_SAFE_INTEGER;

    for(let windowEnd = 0; windowEnd < array.length; windowEnd++){
        currentSum += array[windowEnd];
        while(currentSum >= smallest){
            let x =[minWindowSize, windowEnd+1 - windowsStart];
            minWindowSize = Math.min(...x);
            currentSum -= array[windowsStart];
            windowsStart++;
        }

    }
    return minWindowSize;
}


let numbers = [4,2,2,7,8,1,2,8,1,0]
let answer = findSmallestSum(numbers, 8);

console.log(answer)