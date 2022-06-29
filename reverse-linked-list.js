/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let stack = [];
    let node = head;
    if(!node) return null;
    
    while(node){
        stack.push(node.val);
        node = node.next;
    }

    let list = new ListNode(stack.pop());
    let pointer = list;
    while(stack.length > 0){
        pointer.next = new ListNode(stack.pop());
        pointer = pointer.next;
    }

    return list;
};














/** Anohter technique **/
var reverseList = function(head) {
    let node = head;
    let result = null;
    
    while(node){

        const temp = new ListNode(node.val, result);
        result =  temp;
        node = node.next;
    }
    return result;
};
