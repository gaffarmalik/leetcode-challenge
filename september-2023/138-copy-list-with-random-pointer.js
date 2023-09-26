/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    // Requires 2 Passes to achieve O(n)
    // Notice we didn't initialize dummy with a value;
    // We intend on dicarding the first node finally, as it's just for initialization;
    let map = new Map();
    let head2 = head;

    const dummy = new Node(); // vs new Node(head.val);
    let tail = dummy;


    while(head2){           
        tail.next = new Node(head2.val);
        const copy =  tail.next;
        
        map.set(head2, copy);
        tail = tail.next;
        head2 = head2.next;
    };



    let head20 = head; // Another runner for the LL
    while(head20){
        map.get(head20).random = map.get(head20.random) || null; // For Undefined keys
        head20 = head20.next;
    }


    return dummy.next; // or map.get(head)
};


