/**
 * @param {TreeNode} root
 * @return {string}
 */
 var tree2str = function(root) {
    if(!root) return null;
    let {left, right} = root;
    
    left = left ? `(${tree2str(left)})` : '';
    right = right ? `(${tree2str(right)})` : '';
    
    if(right && !left) sum = `()${right}`;
    else sum = left + right;
    
    return root.val + sum;
};