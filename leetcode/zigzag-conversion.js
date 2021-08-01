/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    let index =0;
    let len = s.length;
    let result =[];
    let row = numRows;
    let string = s;
    let pointer = 1;
    var goUp = false;
    
    while(index < len){
        if(result[pointer -1] != undefined){
            result[pointer -1]+= string[index];
        }
        else{
            result[pointer -1] = "";
            result[pointer - 1]+= string[index];
        }
        
        if(pointer === row) goUp = true;
        if(pointer === 1 ) goUp = false;
        if(goUp === true) pointer --;
        if(goUp === false) pointer++;
        
        index++;
        
    }
    
    return result.join("");
    
    };