function palindromePerm(str){
    let string = str.toLowerCase();
    let hash ={};
    let odd =0;
    let length = string.length;

    for(let i=0; i< length; i++){
        if(string[i] in hash){
            if( (hash[string[i]]%2 ) !== 0 ) odd--;
            else odd++;
            hash[string[i]]+=1;

        }
        else{
            hash[string[i]] =1;
            odd++
        }
    }

    if(odd === 0 && length %2 ===0) return true;
    else if(odd === 1 && length%2 >= 1) return true;
    else return false;

}

console.log(palindromePerm("madam"));