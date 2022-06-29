/**
 * Javascript allows you to access an index within a string, like you'd do with an array, when it's used in a for-loop;
 * The case is not the same when it's outside the loop.
 * I'm confused!
 */
const string = 'abcdefg';
for(let index=0; index < string.length; index++){
    console.log(string[index])    // <---- Right here: Could be string[0], string[1], string[2]
}

console.log(string[0])  // <---- This fails with an error