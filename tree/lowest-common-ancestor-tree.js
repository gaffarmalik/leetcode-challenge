/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {

    return backTrackLowest(root, p,q);
};

function backTrackLowest(root, p,q){
    if(root === null) return null;
    if(root === p || root === q) return root;
    
    let left = backTrackLowest(root.left, p,q);
    let right = backTrackLowest(root.right, p,q);
    
    
    if(left === null) return right;
    if(right === null) return left;
    
    
    return root; // Means i now have both P and Q and non of them is NULL. Same as (if left !== null && right !== null)
    
    

}