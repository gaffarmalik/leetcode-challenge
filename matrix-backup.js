// Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?


function matrixRotate(matrix){   
    let len = matrix.length;

    for(let i=0; i< 1; i++){
        for(let j=i; j< len-1; j++){
            
            // top to right
            // let temp_top = matrix[0][j];
            // let temp_right = matrix[j][len-1];
            let _temp = matrix[len-1][len-1-j];
            // let temp_left = matrix[len-1-j][0];
            // let _temp = matrix[len-1-j][len-1-j];

            
            matrix[len-1][len-1-j] = matrix[j][len-1];
            matrix[j][len-1] = matrix[0][j];
            matrix[0][j] = matrix[len-1-j][0]; //start
            matrix[len-1-j][0] = _temp;
            
            // matrix[len-1-j][len-1-j] = matrix[j][len-1-j];//solved
            // matrix[j][len-1-j] = matrix[j][j]; //solved
            // matrix[j][j] = matrix[len-1-j][j]; //solved
            // matrix[len-1-j][0] = _temp;
            
        }
        // console.log(matrix)
    }
   return matrix;
}

console.log(matrixRotate([
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]))