/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 * NOTE: I really enjoy this question
 */
var floodFill = function(image, sr, sc, newColor) {
    //start from 1st sr,sc coordinates;
    let limiters = [image.length, image[0].length];
    fill(image,limiters, sr,sc, newColor, image[sr][sc]);
    return image;
    
};

var fill =  function(image,limiters,sr,sc,newColor,oldColor){
    if(sr == limiters[0] || sc == limiters[1]) return;
    if(sr< 0 || sc< 0) return;
    if(image[sr][sc] != oldColor || image[sr][sc] == newColor ) return;
    
    
    image[sr][sc] =  newColor;
    
    //left;
    fill(image, limiters,sr, sc-1, newColor, oldColor)
    
    //right;
    fill(image,limiters, sr, sc+1, newColor, oldColor);
    
    //top;
    fill(image, limiters, sr-1, sc, newColor, oldColor);
    
    //bottom;    
    fill(image, limiters, sr+1, sc, newColor, oldColor);
    
    return;
}
