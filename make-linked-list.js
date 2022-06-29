function findTillLast(node,position){
    let counter =1;
    let arr =[];
    while(node !== null){
        if(counter>=position){
            arr.push(node.value);
        }
        node = node.next;
        counter++;
    }
    
    console.log(arr)
    }
    

    function removeDuplicates(head) {
    // Hash to store seen values
    var set = new Set();
    let previous = null;

    while(head !== null){
        if(set.has(head.value)){
            previous.next = head.next;
        }
        else{
            set.add(head.value);
            previous = head;

        }   
        head = head.next;

    }

    
}

