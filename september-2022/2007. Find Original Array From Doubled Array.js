/**
 * @param {number[]} changed
 * @return {number[]}
 */
 var findOriginalArray = function(changed) {
    const result = []
    if(changed.length % 2  > 0) return result;
   
    let countmaps =  {};
    let sortedchanged = changed.sort((a,b)=> a-b);
    
    //set up the countmaps
    for(let x of sortedchanged) 
        countmaps[x] ? countmaps[x]++ : countmaps[x] = 1;
    
    
    for(let n of changed){
        //treat zero as a special case, because 0 * 0 is 0;
        if(n === 0 && countmaps[n] >= 2){
            countmaps[n]-=2;
            result.push(n);
        }
        else if(n > 0 && countmaps[n] > 0 && countmaps[n*2] > 0){
            countmaps[n]--;
            countmaps[n*2]--;
            result.push(n);
        }
        
        
        //in a case where we only have an uneven(odd) amount of zeroes
        //nothing happens on this end
    }
    
    return (result.length === changed.length/2) ? result : []
  
    
};