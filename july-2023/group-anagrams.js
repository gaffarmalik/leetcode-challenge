/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    const result = [];
    const hash = {}
    // ["eat","tea","tan","ate","nat","bat"]
 
    for(let i=0; i< strs.length; i++){
        const str = strs[i];

        if(hash[i]) continue;

        const strAnagrams = [];
        for (let j=i; j< strs.length; j++){
            if(!hash[j] && isAnagram(str, strs[j])) {
                strAnagrams.push(strs[j]);
                hash[j] = 'x';
            }
        }

        hash[i] = 'x';
        result.push(strAnagrams)
    }


    return result;
};


var isAnagram = function(s, t) {
    //[anagram] ==> hashS {a:2,n:1, g:1, r:1,a:1, m:1}
    const hashS = {};
    if(s.length !== t.length) return false;
    for(let x of s){
        hashS[x] = 1 + (hashS[x] || 0);
    }

    for(let i=0; i< t.length; i++){
        if(!(hashS[t[i]] && hashS[t[i]] > 0)) return false;
        hashS[t[i]]--;
    }


    return true;

};