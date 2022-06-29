/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    const x = Math.log2(n);
    return x % 1 === 0;
}
