/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {
    // Calculate the min required length for each side.
    const minRequiredLength = matchsticks.reduce((x,y) => x+y)/4;
    if(!Number.isInteger(minRequiredLength)) return false;
    
    
    const sides = [0,0,0,0];
    return recurse(sides, matchsticks.sort((a,b) => b-a) , 0, minRequiredLength);
    //Bin packing first-fit recommends sorting in descending order
    
    
};


const recurse = function(sides, matchsticks, pos, minRequiredLength){
    if(pos >= matchsticks.length) return true;
    
    for(let i=0; i< sides.length; i++){
        if(sides[i] + matchsticks[pos] <= minRequiredLength){
            const side_copy = [...sides];
            side_copy[i] += matchsticks[pos];
            if(recurse(side_copy, matchsticks, pos+1, minRequiredLength)) return true;
        }
    }
    
    return false;
}