/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    // 1. technique is slow pointer fast pointer and O(1) memory
    // 2. Use a hash map to store items and check hash if item was traversed before
    // We'll use option 1

    let slow = head;
    let fast = head;
    if(!slow?.next) return false;
    while(slow?.next != null && fast?.next != null){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) return true;

    }

return false;
};