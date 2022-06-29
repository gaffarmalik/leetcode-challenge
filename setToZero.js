// Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and 
// column are set to 0. 
// Big O(mn) //Matrix is MN
var hashColumns = {};
var hashRows ={};
function setToZero(matrix){

const length = matrix.length;

for(let i=0; i< length; i++){
    for(let j=0; j< length; j++){
        if(matrix[i][j] === 0){
            hashRows[i] = true;
            hashColumns[j] = true; //fill row
        }
    }
}

for(let i=0; i< length; i++){
    for(let j=0; j< length; j++){
        if(hashColumns[j] || hashRows[i]){
            matrix[i][j] =0;
        }
    }
}

return matrix
}



console.log(setToZero([
    [1,2,3],
    [4,0,6],
    [7,8,9]
]))