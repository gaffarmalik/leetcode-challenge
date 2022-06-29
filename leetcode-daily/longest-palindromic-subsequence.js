/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    //simply by searching for palindromes from inside out usuing: https://www.youtube.com/watch?v=y2BD4MJqV20
    
    let start = 0;
    let end = 0;
    let length = 0;
    
    for(let i=0; i < s.length; i++){
        let odd = checkPalindromeInsideOut(s, i, i);
        let even = checkPalindromeInsideOut(s, i, i+1);
        let max = Math.max(even, odd);
        
        if(max > length){
            start = 1 + (i - (max/2)); //Just to prevent overflowing
            end = i+ (max/2);
            length = max;
        }
        
    }
       
        return s.substring(start, end+1);
 
};


  function checkPalindromeInsideOut(string, start, end){
        
        while(start >= 0 && end < string.length && string.charAt(start) == string.charAt(end)){
            start--;
            end++;
        }
        
        return end - start - 1; // Additional Minus step because of the extra iteration process
    }
