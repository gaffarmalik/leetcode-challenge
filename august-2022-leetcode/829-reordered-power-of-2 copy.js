/**
 * @param {number} n
 * @return {boolean}
 */
 const sort = res => res.toString().split('').sort().join('');

 var reorderedPowerOf2 = function(n) {
  //get all possible power of 2 in a set
     const set = new Set();
     let res = 1;
     
     while(res < 10**9){
         set.add(sort(res));
         res = res*2;
     }
     
     return set.has(sort(n));
     
 };
 