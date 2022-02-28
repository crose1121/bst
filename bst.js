// Binary Search Tree!

class Node{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    findMax() {
        return this.right?this.right.findMax():this.value;
    }
    findMin() {
        return this.left?this.left.findMin():this.value;
    }
    insert(valueInput) {
        //if we're in here the root is not null
        if (valueInput<this.value) {
            if (this.left) {
                this.left.insert(valueInput)
            }
            else{this.left = new Node(valueInput);}
        }

        if (valueInput>this.value) {
            if (this.right) {
                this.right.insert(valueInput)
            }
            else{this.right = new Node(valueInput);}
        }
    }

    contains(valueInput) {
        //check from the BST if root is null first. 
        // if we're in this method, bst1.root != null
        if (this.value === valueInput) {
            return true;
        }
        if (valueInput<this.value) {
            if (this.left) {
                return this.left.contains(valueInput);
            }
            return false;
        } 
        if (valueInput>this.value) {
            if (this.right) {
                return this.right.contains(valueInput);
            }
            return false;
        }
    }
}

class BST{
    constructor() {
        this.root = null;
    }

    insert(value) {this.root?this.root.insert(value):this.root = new Node(value);}

    contains(value) {return this.root?this.root.contains(value):false}

    display(currentNode=this.root) {
        if (currentNode!=null) {
            console.log("node:", currentNode.value);
    
            if (currentNode.left != null) {
                this.display(currentNode.left)
            }
    
            if(currentNode.right != null) {
                this.display(currentNode.right)
            }
        }
        return null;
    }

    findMax() {
        return this.root?this.root.findMax():null;
    }
}

// console.log(10>null);

let bst = new BST();
bst.insert(2);
bst.insert(3);
bst.insert(5);
bst.insert(1);
bst.insert(7);
bst.insert(14);

bst.insert(78);


console.log(bst.findMax());
bst.display();

console.log(bst.contains(14)) //true
console.log(bst.contains(88)) //false