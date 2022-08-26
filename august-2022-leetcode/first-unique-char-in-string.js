/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    let hash = {};
    let discarded = {};
    
    for (let i=0; i< s.length; i++){
        let char = s[i];
        if(char in hash || char in discarded){
            discarded[char] = 'x';
            delete hash[char];
        }else{
            hash[char] = i ;
        }
    }
        
        return hash[Object.keys(hash)[0]] ?? -1;
    };

// LEVEL: Easy