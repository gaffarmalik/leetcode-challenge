/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const hash = {}
    for(let x of s) hash[x] = 1 + (hash[x] || 0);

    for(let y of t){
        if(!hash[y] || hash[y] < 0 ) return y;
        hash[y]--;
    }
    console.log(hash)
};