/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // Hash tables, string, sliding window
    const string = s.split('');

    let longest = 0;
    let hashMap = {};

    // [i]
    // [a,b,c,a,b,c,b,b]
    // [j]

    for (let i = 0; i < string.length; i++) {
        let start = i;
        hashMap = {};
        for (let j = i; j < string.length; j++) {
            let end = j;
            if (hashMap[string[j]]) break;
            hashMap[string[j]] = 1;
            longest = Math.max(...[longest, end - start + 1]);

        }
    }



    return longest;

}