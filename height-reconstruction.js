/**
 * @param {number[][]} people
 * @return {number[][]}
 */
 var reconstructQueue = function(people) {
    // let count =0;
    let result = new Array(people.length).fill([]);
    let pp = people.sort((x,y) => x[0] - y[0]);
    
       for(let i=0; i< pp.length; i++){
          let count = pp[i][1];
          for(let j=0; j < result.length; j++){
              if(result[j].length === 0 || result[j][0] >= pp[i][0]) count--;
              
              if(result[j].length === 0 && count < 0){
                    result[j] = [...pp[i]];
                    break;
              }
              
          }
        }
    return result;
 
};
