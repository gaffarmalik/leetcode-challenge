function urlify(a){
 let strlen = a.length;
 let result = "";

 for(let i=0; i< strlen; i++){
     if(a[i] === ' ' && a[i+1] === ' ' ) continue;
     else {
        add = a[i] === ' ' && i !== strlen -1 ?'%20': a[i];
        result+=add;
     }
 }
 console.log(result.length)
 return result;
}


// "ab", s2 = "eidbaooo"
console.log(urlify("Mr John Smith             "));