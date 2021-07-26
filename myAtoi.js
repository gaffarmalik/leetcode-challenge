/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    let min = Math.pow(-2, 31), max = Math.pow(2, 31) - 1;
    let sign_arr = {'-':'-', '+':'+'};
    let str = s.trimLeft(), result ='';
    let x =str.length, i=0;
 
     while(x > 0){
        if( ( !sign_arr[str[i]]  && isNaN(str[i]))  || (str[i] ==" ") || (i > 0 && sign_arr[str[i]]) ) break;
        let t = (i === 0 && str[i] == '-') ? '-' : (i === 0 && str[i] == '+') ? '': str[i];
        result += t;
        
        if(result < min) return min;
        if(result > max) return max;
        x--;
        i++;
    }
     
     return isNaN(result) ? 0: result;
    
 };
 console.log(myAtoi("12343213eerfe"))