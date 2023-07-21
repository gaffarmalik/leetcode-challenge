/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    // amanaplanacanalpanama
    
    s = s.toLowerCase().split(' ').join('').replace(/[^a-z0-9]/gi, '');
    if(s.length <= 1) return true;

    let t = s.split('').reverse().join('');
    console.log(t)
    return s === t;
    
};