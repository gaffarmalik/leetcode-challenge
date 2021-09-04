/**
 * Brute Force by Me
 */

function lcs(x,y,m,n){
let result =0;
let runner =0;
let hash = {};

for(let i of x ){
        for(let j of y){
                if(i === j){
                        hash[i] = true;
                        result = result + 1;
                        y = y.replace(j,'');
                        x = x.replace(i,'');
                };
            
                runner++
    }  
}
console.log(x.length, y.length, runner)
return result;

}



var x = 'hello from london sample';
var y = 'londons';
let m  = x.length;
let n = y.length;

console.log(lcs(x,y,m,n))