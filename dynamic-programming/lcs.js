/**
 * Using Memoization with Recursion. A bit optimized;
 */
const hash= {}

 var lcs = function(t1, t2, m,n) {
    // Create dp table
   if(t1 ==='' || t2 === '') return 0;
   if(hash[m+n]) return hash[m+n]; //This line boosted computation time. Recursions are slower for languages like Javascript
   
   else if(t1[m - 1] === t2[n -1]){
       let left = lcs(t1.slice(0, m-1), t2.slice(0, n-1), m-1, n-1 );
       let right = lcs(t1.slice(0, m-1), t2.slice(0, n-1), m-1, n-1 );

       let answer = 1 + Math.max(left, right);
       hash[m+n] = answer;
       return answer;
   }
   
   let answer = Math.max(lcs(t1.slice(0, m-1), t2, m-1, n ), lcs(t1, t2.slice(0, n-1),m, n-1));
   hash[m+n] = answer;
   return answer

};
    

var x = 'hello from london sample'.repeat(10);
var y = 'londons'.repeat(10);
let m  = x.length;
let n = y.length;

console.log(lcs(x,y, m, n))

//ABDHRT