// Binary Search Tree!

class Node{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor() {
        this.root = null;
    }
    insert(value){
        let newNode = new Node(value)
        if (this.root===null) {
            this.root = newNode;
            return;
        }
        let runner = this.root;
        while(true) {
            if (newNode.value > runner.value ) {
                if (runner.right===null) {
                    runner.right = newNode;
                    return;
                }
                else {
                    runner = runner.right;
                }
            }
            else {
                if (runner.left===null) {
                    runner.left = newNode;
                    return;
                }
                else {
                    runner = runner.left;
                }
            }
        }
    }
    display(currentNode=this.root) {
        console.log("node:", currentNode.value);

        if (currentNode.left != null) {
            this.display(currentNode.left)
        }

        if(currentNode.right != null) {
            this.display(currentNode.right)
        }
    }
}

let bst = new BST();
bst.insert(3)
bst.insert(5)
bst.insert(4)
bst.insert(2)
bst.insert(1)
bst.display();