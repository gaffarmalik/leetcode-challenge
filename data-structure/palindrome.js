/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
   
    const string = x+'';
    const length = string.length;
 
    let left = length%2 === 0? length/2 -1 : Math.floor(length/2);
     let right = length%2 === 0? length/2 : Math.floor(length/2);
    
     while(left >= 0 && right <= length){
         
         if(string[left] !== string[right]){
             return false;
         }
         left--;
         right++
     }
       
       
    return true;
 };