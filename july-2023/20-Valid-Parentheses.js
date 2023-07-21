/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {

    const closing = { ')': '(', '}': '{', ']': '['};
    const opening = { '(': ')', '{': '}', '[': ']'};
    const pop = []; 


    for (let char of s){
        if(char in opening) {
            pop.push(char);
            continue;

        }else if(closing[char]){
            const closingCharValue = closing[char];
            const popped = pop.pop();
            console.log(popped)
            
            if(closingCharValue !== popped) return false

        }else return false;
    }


    return pop.length ? false : true;
};