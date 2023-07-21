/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s, k) {
    const string = s.split('');
    // BBB, BBB, BBBB
    let i =0, j=0;
    const hash = {};
    //let i = 0;
    // currenttotallength = 4
    // hash ={a:0, b:3 }
    let longest = 0;  ///==> 2
    /// ACBA 
   
    const az = [
        'a', 'b','c', 'd', 'e', 'f', 'g','h','i','j','k','l',
        'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    for(let a of az){
        hash[a.toUpperCase()] = 0;
    }


    //current most repitited = 1, ==> 2 vs 2 
    // - Keep moving J, as long as k is not exhausted and members between i and j meet requirement;
    // - Keep track of counts within hash, document longest within window and continue 
    // -
    // if i = j, we move i by 1, if i i != j we move j forward
    // [AABABBA]

     //[ i]
    // [BBCBADB]
    // [    j]
    let currentLongest = 0;
    let currentLongestLetter;
    for(let j=0; j< string.length; j++){
        // let start = j;
        hash[string[j]] = hash[string[j]] + 1;

        currentLongest = Math.max(hash[string[j]], currentLongest)
        // let diff = (j-i +1) - currentLongest;


        // if(diff < k) k--;
        
        while((j-i +1) - currentLongest > k){
            console.log('ran here');
        

            hash[string[i]]--;
            i++;
            //currentLongest-- //= Math.max(hash[string[i]], currentLongest)

        }

        longest = Math.max([longest, j-i+1]);

    //j++


    }
    console.log(hash);


    return longest;



};

//   for(j=i+1; j< string.length; j++){
//             // Start here.

//             if(string[start] === string[j]){
//               break;  
//             }else{
//                 continue;
//             }

//         }