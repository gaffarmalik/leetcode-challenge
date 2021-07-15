/**
 * - Implementing Priority Queues
 * - Different from normal Queues due to enqueuing mechanism
 */

var PQ = function(){
    var collection =[];
    
    this.enqueue = function(element){ 
        //param:Array ["Item", priority]
        if(this.isEmpty()){
            collection.push(element);
            return;
        }
        else{
            var added = false;
            for(let i=0; i<collection.length; i++){
                if(element[1]< collection[i][1]){
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if(!added){
                collection.push(element);
            }

        }

    }

    

    this.isEmpty = function(){
        return (collection.length === 0);
    }

    this.front = function(){
        return collection[0];
    }

    this.size = function(){
        return collection.length;
    }

    this.print = function(){
        console.log(collection);
    }

    this.dequeue = function(){
        var value = collection.shift();
        return value[0];
    }

}


var newPQ = new PQ();
newPQ.enqueue(['Malik', 1]);
newPQ.enqueue(['Lateef3', 3]);
newPQ.enqueue(['Lateef', 2]);
newPQ.enqueue(['Lateef', 2]);
newPQ.enqueue(['Lateef', 4]);
newPQ.dequeue();

newPQ.print()