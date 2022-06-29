// Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?


function matrixRotate(matrix){   
    let len = matrix.length;
    var offset =1;
    var start =0;
    var end = len-1;
    
    for(let i=0; i<len/2; i++){
        for(let j=0; j< len-offset-start; j++){

            let _temp = matrix[end][end-j];
            matrix[end][end-j] = matrix[j+start][end]; 
            matrix[j+start][end] = matrix[start][j+start]; 
            matrix[start][j+start] = matrix[end-j][start]; 
            matrix[end-j][start] = _temp;
            
        }
        start++
        offset++;
        end--;
    }
   return matrix;
}

// console.log(matrixRotate([
//     [1,2,3,4,5,6,7,8,9,10],
//     [11,12,13,14,15,16,17,18,19,20],
//     [21,22,23,24,25,26,27,28,29,30],
//     [31,32,33,34,35,36,27,38,39,40],
//     [41,42,43,44,45,46,47,48,49,50],

//     [51,52,53,54,55,56,57,58,59,60],
//     [61,62,63,64,65,66,67,68,69,70],
//     [71,72,73,74,75,76,77,78,79,80],
//     [81,82,83,84,85,86,87,88,89,90],
//     [91,92,93,94,95,96,97,98,99,100]
// ]))

console.log(matrixRotate([
    [1,2,3],
    [4,5,6],
    [7,8,9]
]))

// console.log(matrixRotate([
//     [1,2,3,4,5],
//     [6,7,8,9,10],
//     [11,12,13,14,15],
//     [16,17,18,19,20],
//     [21,22,23,24,25]
// ]))