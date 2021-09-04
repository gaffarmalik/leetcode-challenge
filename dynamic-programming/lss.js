// ABC, ABD

function longestCommonSubstring(t1,t2,n, m,count){
    if (n==0 || m==0)
        return count;
    if (t1[n-1] == t2[m-1])
        return longestCommonSubstring(t1, t2, n-1, m-1, count+1);
        return Math.max(count, Math.max(longestCommonSubstring(t1, t2, n-1, m, 0), longestCommonSubstring(t1, t2, n, m-1, 0)));

}


var x = 'hello from londonsa ample';
var y = 'londonsa';
let m  = x.length;
let n = y.length;


console.log(longestCommonSubstring(x,y,m,n,0))