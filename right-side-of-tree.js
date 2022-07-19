var rightSideView = function(root) {
    let result = [];
    let queue = [root];
    
    while(root && queue.length > 0){
        result.push(queue[queue.length-1].val);
        const tempQueue = [];
        for(let i=0; i< queue.length; i++){
            queue[i].left && tempQueue.push(queue[i].left);
            queue[i].right && tempQueue.push(queue[i].right);            
        };
        queue = [...tempQueue];
    }
    
    return result;  

};
