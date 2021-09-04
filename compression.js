// String Compression: Implement a method to perform basic string compression using the counts 
// of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the 
// "compressed" string would not become smaller than the original string, your method should return 
// the original string. You can assume the string has only uppercase and lowercase letters (a - z)

function compression(string){   
    let len = string.length;
    let result = "";
    let consecutiveCount = 0;

    for(let i=0; i< len; i++){
        consecutiveCount++;

        if(string[i] !== string[i+1]){
            result += string[i]+ consecutiveCount;
            consecutiveCount =0;
        } 

    }
    return len > result.length? result: string;
}

console.log(compression("aacbcdefghijklcaaaaaaaaaaaaaaaaaaaaaaaaaaa"))