
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion =  (s1, s2)=> {
  let s1Map = {};
  let count = s1.length;
  let end=0, start = 0;
    
  for(let x of s1){
      s1Map[x] ? s1Map[x]++ : s1Map[x] = 1;
  }
    
    for(let end = 0; end< s2.length; end++){
        let ch = s2[end];
        if(ch in s1Map){
            if(s1Map[ch] > 0) count--;
            s1Map[ch]--;
        }
        

        if(end-start+1 < s1.length){
            continue;
        }
        
        if(count === 0) return true;

        if(s2[start] in s1Map){
            if(s1Map[s2[start]] >= 0) count++;
            s1Map[s2[start]]++
        }
        
        start++;
    }
    
    return false;
};




