/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    if(n===0) return false;
    
    return recurse(3, n);
    
};

function recurse(i, n){
    if(n === 1) return true; //correct
     
    let mod = n % i;

    if(i > n || mod >0) {
        if(mod % 3 === 0) i = 3;
        else return false;
    }
      
    if(n % i === 0){
        return recurse(i*3, n/i);
    }
    
  
}
