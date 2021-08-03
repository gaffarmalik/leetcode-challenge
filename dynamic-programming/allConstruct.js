// // Find the numbers that occur only once in an effective way

// function solution(arr){

// // console.log(arr)
// let memo ={};
// let result = []
// for(let x=0; x < arr.length; x++){
//     if(memo[arr[x]]) memo[arr[x]] = false;
//     else memo[arr[x]] = true;
// }

// for(let y in memo){
//     if(memo[y] === true ){
//         result.push(y)
//     }
// }


// return result;

// }

// console.log(solution([1,2,3,3,1,1,1,4,5,6,6,2,4]))