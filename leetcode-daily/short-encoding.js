/**
 * @param {string[]} words
 * @return {number}
 */
 function TrieNode(letters = {}, startOfWord = true){
    this.startOfWord =  startOfWord;
    this.letters = letters;
}

var minimumLengthEncoding = function(words) {
    //create the trie
    let output = 0;
    let trial = new TrieNode({}, false);
    
    
    const recurse = (i, word, trial) => {
        let ty = trial;
        if(i < 0) return;
        if(!(word[i] in ty.letters)){
            if(i > 0) ty.letters = {...ty.letters, [word[i]]: new TrieNode({}, false)};
            else ty.letters = {...ty.letters, [word[i]]: new TrieNode({})};
            
            recurse(i-1, word, ty.letters[word[i]]);
        }    
    }
    
    
    for(let word of words){
        recurse(word.length -1, word, trial);
    }
    
   
    
    console.log(trial.letters.e.letters.m.letters.i);      
    
};