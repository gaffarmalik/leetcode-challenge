const arr = [3,5,8, 5,10, 2, 1];


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



function partitionAround(node, partition){
var ls = new NodeV(),
    le = ls,
    gs = new NodeV(),
    ge = gs;

while(node !== null){
    if(node.value < partition){
        le.next = node;
        le = le.next;
    }
    else if(node.value >= partition){
        ge.next = node;
        ge = ge.next;
    }

    node = node.next;

}
  
    ge.next = null;
    le.next = gs.next;
    ls = ls.next



}


var node  = createList(arr);
partitionAround(node, 5)
console.log(node.next.next.next.next);

