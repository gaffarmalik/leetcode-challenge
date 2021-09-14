const arr = [1,1,2, 1,10, 3, 5];


function NodeV(value, next) {
    this.value = value || null;
    this.next = next || null;
    // return this;
}


function createList(arr) {
    var nodes = null;
    var temp = null;

    for (let x of arr) {
        if (nodes === null) {
            nodes = new NodeV(x);
            temp = nodes; //1
        }
        else {
            temp.next = new NodeV(x);
            temp = temp.next;
        }

    }

    return nodes;
}


// function removeDuplicates(head) {
//     // Hash to store seen values
//     var set = new Set();
//     let previous = null;

//     while(head !== null){
//         if(set.has(head.value)){
//             previous.next = head.next;
//         }
//         else{
//             set.add(head.value);
//             previous = head;

//         }   
//         head = head.next;

//     }

    
// }

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




var node  = createList(arr);

console.log(findTillLast(node, 3));
console.log(node);

