/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

 var divide = function(dividend, divisor) {
    // Some cases to observe are:
    // The goal is to solve without operators;
    // Quite easy, I also learnt how to use bitwise shift operators
    // Another better way to solve this is to use MATH POWERS (Exponents);
     
     let result = 0;
     let a = Math.abs(dividend);
     let b = Math.abs(divisor);
     let MAX = 2147483647, MIN = -2147483648;
     
     while(a - b >= 0){
         let p = 0;
         let c = 0;
         while(a - (b * (2**p)) >= 0){
             c = p;
             p++;
         }
         
         result += 2**(c);
         a -= (b*(2**c))
     }
     
     
     result = (dividend >=0) == (divisor >= 0) ? result : -result;
     
     if(result >= MAX) return MAX;
     if(result <= MIN)  return MIN;
     
     return result;
     
     
 }