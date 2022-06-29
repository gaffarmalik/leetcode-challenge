
var maxAreaOfIsland = function(grid) {
    let max =0;
    
    const visit = function(grid, row, col){
        let condition = row < 0 || col < 0 || row >= grid.length || col >= grid[0].length;
        if(condition || grid[row][col] === 0 ) return 0;
        
        grid[row][col] = 0; //visited
        
        return 1 
            + visit(grid, row, col-1)
            + visit(grid, row, col+1)
            + visit(grid, row-1, col)
            + visit(grid, row+1, col);
            
    }
    
    for(let row=0; row< grid.length; row++){
        for(let col=0; col< grid[0].length; col++){
            let visited = visit(grid, row, col);
            max = Math.max(max, visited);
        }
    }
    
    console.log(max);
    return max;
    
    
    }
