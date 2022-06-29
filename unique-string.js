function uniqueString(string){
    // string = "abdulgaffar";
    let len = string.length;
    let hashMap = {};

    for(let x=0; x<len; x++){
        if(string[x] in hashMap) return false;
        else hashMap[string[x]] = x;
    }
    return true;
}

console.log(uniqueString("abdulg"));