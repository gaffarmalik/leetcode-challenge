/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
 var updateMatrix = function(mat) {
  
    let pq = [];
    let m = mat.length, n = mat[0].length;
    
    let directions = [[1,0], [-1, 0], [0, -1], [0, 1]]; //top, left, right, bottom
    let visited = new Map();
    for(let i=0; i< m; i++){
        for(let j=0; j< n; j++){
            if(mat[i][j]=== 0){
              visited.set(`${i}-${j}`, true);
              pq.push([i, j]);
            }
        }
    }
    
    // This uses djikstra algorithm
    while(pq.length > 0){
        let [row,col] = pq.shift();
        // visited.set(`${row}-${col}`, true);
        
        for(const [r,c] of directions){
            let ny = row + r;
            let nx = col + c;
            if(ny >= 0 && ny < m && nx >=0 && nx < n && !visited.has(`${ny}-${nx}`)){
                mat[ny][nx] = mat[row][col] + 1;
                pq.push([ny, nx]);
                visited.set(`${ny}-${nx}`, true)
            }
        }

        
    }
    
    return mat;
};




/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
 var updateMatrix = function(mat) {
    //PURE DJIKSTRA ALGORITHM
    let m = mat.length;
    let n = mat[0].length;
    let visited = new Map();
    let directions = [[1,0], [-1, 0], [0, -1], [0, 1]]; //top, left, right, bottom
      
    let pq = [];
    for(let i=0; i < m; i++){
        for(let j=0; j < n; j++){
            if(mat[i][j] !== 0) mat[i][j] = Number.MAX_VALUE;   
            else pq.push([i,j]);
        }
    }
      
      
   while(pq.length > 0){
    let [row, col]  = pq.shift();
       
    for(const [r,c] of directions){
              let ny = row + r;
              let nx = col + c;
              if(ny >= 0 && ny < m && nx >=0 && nx < n && !visited.has(`${ny}-${nx}`)){
                  if(mat[row][col] + 1 < mat[ny][nx]) mat[ny][nx] = mat[row][col] + 1;
                  pq.push([ny, nx]);
                  visited.set(`${ny}-${nx}`, true);
              }
          }
   }
  
  
      
  //  for(let i=0; i<m; i++){
  //      for(let j=0; j< n; j++){
  //          if(mat[i][j] != 0){
               
  //          }
  //      }
  //  }
      
      return mat;
      
  
  };
  
  