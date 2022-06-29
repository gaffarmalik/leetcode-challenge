/**
 * @param {string} s
 * @return {string}
 */
 var stringLength = 0;
 var stringStart = 0;
 var startPoint = 0;
 
 var longestPalindrome = function (s) {
     var string = s;
     let len = string.length;
 
     if (len <= 2) return string[0] || string;
     for (let i = 0; i < len; i++) {
         if (len % 2 == 0) expandString(string, i, i + 1);
         else expandString(string, i, i);
     }
     return string.substring(startPoint, stringLength + startPoint);
 
 };
 
 
 var expandString = function (string, start, end) {
     while (start >= 0 && end < string.length && string.charAt(start) === string.charAt(end)) {
         if (stringLength < ((end - start) + 1)) {
             stringLength = (end - start) + 1;
             startPoint = start;
         }
         end++;
         start--;
 
     };
 
 }

 console.log(longestPalindrome(""))