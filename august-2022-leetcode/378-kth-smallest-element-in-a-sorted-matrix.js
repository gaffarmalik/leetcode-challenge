/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(matrix, k) {
    const arr = [];
    let n = matrix.length;
    let pos = 0;
    
    // O(n)
    for(let i=0; i< n; i++){
        for(let k=0; k < n; k++){
            arr.push(matrix[i][k]);
        }
    }
    
    // O(logn)
    const sortedArr = arr.sort((x,y)=> x-y);
    
    
    return sortedArr[k-1];
};




//OPTION 2
// o(1) memory, o(logn) time
var kthSmallest = function(matrix, k) {
    let n = matrix.length
    let low = matrix[0][0]
    let high = matrix[n-1][n-1]
	
    while(low < high) {
        let mid = Math.floor((low + high)/2)
        if(checkCount(mid,matrix) < k) {
            low = mid + 1
        }
        else {
            high = mid
        }
    }
    return low
	
	function checkCount(mid,matrix) {
	let count = 0
	let n = matrix.length
	let row = 0 // start checking from first row upto last
	let col = n-1 // start checking from last column (sorted)
	 while(row < n && col >= 0) {
		 //is last element is smaller/equal, then whole row is smaller/equal
		 if(matrix[row][col] <= mid) {
			 count += col + 1
			 row += 1
		 }
		 else {
			 //check previous element
			 col -= 1
		 }
	 }
	return count
	}
};