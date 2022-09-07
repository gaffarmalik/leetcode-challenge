/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    const ransom = {}; 
    for(let x of ransomNote){
        ransom[x] ? ransom[x]++ : ransom[x] = 1;
    }
    
    for(let x of magazine)
        if(ransom[x]) ransom[x]--;
    

    for(let x in ransom)
        if(ransom[x] > 0) return false;
    
    
    return true;

};

// O(N) time


var canConstruct = function(ransomNote, magazine) {
    const arr = magazine.split('');
    for (let i = 0; i < ransomNote.length; i++) {
        if (arr.indexOf(ransomNote[i]) === -1) {
            return false;
        } else {
            arr.splice(arr.indexOf(ransomNote[i]), 1);
        }
    }
    return true;
};