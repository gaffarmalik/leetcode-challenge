class Graph {
    // defining vertex array and
    // adjacent list
    constructor(noOfVertices)
    {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }
 
    // functions to be implemented
 
    // addVertex(v)
    addVertex(v)
{
    // initialize the adjacent list with a
    // null array
    this.AdjList.set(v, []);
}
    // addEdge(v, w)
    
// add edge to the graph
addEdge(v, w)
{
    // get the list for vertex v and put the
    // vertex w denoting edge between v and w
    this.AdjList.get(v).push(w);
 
    // Since graph is undirected,
    // add an edge from w to v also
    this.AdjList.get(w).push(v);
}


getEdge(name){
    return this.AdjList.get(name);
}

    list(){
    return this.AdjList;
    }

    // printGraph()
    printGraph()
    {
        // get all the vertices
        var get_keys = this.AdjList.keys();
     
        // iterate over the vertices
        for (var i of get_keys)
    {
            // great the corresponding adjacency list
            // for the vertex
            var get_values = this.AdjList.get(i);
            var conc = "";
     
            // iterate over the adjacency list
            // concatenate the values into a string
            for (var j of get_values)
                conc += j + " ";
            // Dijkstra of A dynamic programming
            // Dijksr
            // print the vertex and its adjacency list
            console.log(i + " -> " + conc);
        }
    }
    // bfs(v)
    // dfs(v)
}



// Using the above implemented graph class
// var g = new Graph(6);
// var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ];
 
// // adding vertices
// for (var i = 0; i < vertices.length; i++) {
//     g.addVertex(vertices[i]);
// }
 
// // adding edges
// g.addEdge('A', {B:2});
// g.addEdge('A', {C:4});
// g.addEdge('A', 'E');
// g.addEdge('B', 'C');
// g.addEdge('D', 'E');
// g.addEdge('E', 'F');
// g.addEdge('E', 'C');
// g.addEdge('C', 'F');
 



//Lets implement Dijkstra Algorithm
// DS to consider [ distances, visited];


class Dijkstra{
    distances = { }
    visited = [];
    graph = null;
    start = null;
    prev = [];
    constructor(graph, start){
        this.graph = graph; 
        this.start = start;
    }

    getSmallest(){
        return Object.keys(this.distances).reduce((lowest, node) => {
            if (lowest === Infinity || this.distances[node] < this.distances[lowest]) {
              if (!this.visited.includes(node)) {
                lowest = node;
              }
            }
            return lowest;
          }, Infinity);
    }

    setAllNodeToInfinty(){ 
        for(let x of Object.keys(this.graph)){
            if(x === this.start) this.distances[x] = 0;
            else{
                this.distances[x] = Infinity;
            }
        }
    }

    relaxNeighbours(){
        let smallS =this.getSmallest();
        let smallest = this.graph[smallS];
        // console.log(smallest)
        let arr = Object.keys(smallest);

        arr.forEach((v,i,a)=>{
            let sum = this.distances[smallS]+ smallest[v];
            if(this.distances[smallS]+ smallest[v] <this.distances[v] ){
                //Update distance
                this.distances[v] = sum;
            }
        });
        this.visited.push(smallS);
        // for(let )
    }

    
    run(){
        this.setAllNodeToInfinty()
        let keys = Object.keys(this.graph);
        for(let x of keys){
            this.relaxNeighbours();
        }
    }
    

}



// g.printGraph();
// console.log(g.list())

const problem = {
    start: {A: 5, B: 2},
    A: {C: 4, D: 2},
    B: {A: 8, D: 7},
    C: {D: 6, finish: 3},
    D: {finish: 1},
    finish: {}
  };

let dj = new Dijkstra(problem, 'A');
// dj.setAllNodeToInfinty();
// dj.relaxNeighbours()

dj.run();
console.log(dj.distances)
console.log(dj.prev)
