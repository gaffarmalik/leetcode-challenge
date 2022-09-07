/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */

var levelOrder = function(root) {
    const result = [];
    if(!root) return result;
    
    
    let queue = [{pos:0, node: root}];
    while(queue.length > 0){
        let {pos, node} = queue.shift();
        if(!result[pos]) result[pos] = [];
        
        result[pos].push(node.val);
        
        for(let child of node.children){
            queue.push({
                pos: pos+1,
                node: child
            });
        
        }
       
    }
    
    return result;
    

};