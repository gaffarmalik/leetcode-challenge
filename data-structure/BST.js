class Node{
    constructor(data=null, right=null, left=null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}


class BST{
    constructor(){
        this.root = null;
    }

    add(data){
        const node = this.root;
        if(node === null){
            this.root = new Node(data);
            return;
        }
        else{
            var searchTree = function(node){
                if(data < node.data){
                    if(node.left === null){
                        node.left = new Node(data);
                        return;
                    }
                    else if(node.left !== null){
                        return searchTree(node.left)
                    }
                }
                else if(data > node.data){
                    if(node.right === null){
                        node.right = new Node(data);
                        return;
                    }
                    else if(node.right !== null){
                        return searchTree(node.right);
                    }
                }
                else{
                    return null;
                }
            };
            return searchTree(node);
        }
    }


    remove(data){
        const removeData = function(node, data){
            if(node == null){
                return null;
            }
            if(node.data === data){
                if(node.left === null && node.right === null){
                    return null;
                }
                if(node.left === null){
                    return node.right; 
                }
                if(node.right == null){
                    return node.left;
                }
                //both sides are available
                 var tempNode = node.right;
                 while(tempNode.left !== null){
                     tempNode = tempNode.left;
                 }
                 node.data = tempNode.data;
                 node.right = removeData(node.right, tempNode.data);
            }
            else if(data < node.data){
                node.left = removeData(node.left, data);
                return node;
            }
            else if(data > node.data){
                node.right = removeData(node.right, data);
                return node;
            }
        }

        this.root = removeData(this.root, data);
    }

    findMin(){
        let node = this.root;
        while(node.left !== null){
            node = node.left;
        }
        return node.data;
    }

    findMax(){
        let node = this.root;
        while(node.right !== null){
            node = node.right;
        }
       return node.data;
    }

    find(data){
        let node = this.root;
        if(node == null){
            return null;
        }
        while(node.data !== data){
            if(data< node.data){
                node = node.left;
            }
            else{
                node = node.right;
            }
        }
        return node;
    }

}

var newBST = new BST();
newBST.add(2);
newBST.add(1);
newBST.add(5);
newBST.add(20);
newBST.add(25);
newBST.remove(10);

console.log(newBST.find(2))

console.log(newBST.findMin(),'MIN');
console.log(newBST.findMax(), 'MAX');
console.log(newBST);