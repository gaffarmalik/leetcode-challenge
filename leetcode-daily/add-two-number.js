var addTwoNumbers = function(l1, l2) {
    //loop through
    var node1 = l1, node2 = l2;
    let remainder = 0;
    let resultNode = null;
    
    for(let i= 0, add =0, value =0, prevNode = null; i< 100; i++){
           add = node1.val + node2.val + remainder;
           value = add >= 10 ? add - 10: add;
           remainder = add >= 10 ? 1: 0;   
        
           if(i === 0){
            resultNode = new ListNode(value,null);
            prevNode = resultNode;
           }
           else{
                prevNode.next = new ListNode(value, null);
                prevNode = prevNode.next;
            } 
        
        if(node1.next == null && node2.next == null && remainder == 0) break;
        node1 = node1.next == null ? new ListNode(0, null): node1.next;    
        node2 = node2.next == null ? new ListNode(0, null): node2.next;
    }
         return resultNode;

    
};