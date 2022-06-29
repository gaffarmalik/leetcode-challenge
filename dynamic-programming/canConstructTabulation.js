function canConstructTabulation(target, numBank){
    const array = Array(target + 1).fill(null);
    array[0] =[];
  
    
    return array[target];
    }
    
    console.log(canConstructTabulation(5001, [2,2,5,5, 10, 10, 1, 5001]));