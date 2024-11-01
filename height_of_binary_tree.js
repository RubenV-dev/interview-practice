class Node {
    left = null;
    right = null;
    data;

    constructor(data){
        this.data = data
    }

    insert(value){
        if( value <= this.data){
            if(this.left === null){
                this.left = new Node(value)
            }else {
                this.left.insert(value)
            }
        } else {
            if(this.right === null){
                this.right = new Node(value)
            }else {
                this.right.insert(value)
            }
        }
        return this.data;
    }

    printInOrder(){
        if(this.left !== null){
            this.left.printInOrder()
        }
        console.log(this.data)
        if(this.right !== null){
            this.right.printInOrder()
        }
    }
}

class Node2 {
    left;
    right;
    data;

    constructor(data){
        this.data = data
    }

    insert(value){
        if(this.data === null){
            this.data = new Node(value)
        } else if (value <= this.data){
            if(this.left === null){
                this.left = new Node(value)
            } else {
                this.left.insert(value)
            }
        } else {
            if(this.right === null){
                this.right = new Node(value)
            }else{
                this.right.insert(value)
            }
        }
        return this.data;
    }
    printInOrder(){
        if(this.left !== null){
            this.left.printInOrder()
        }
        console.log(this.data)
        if(this.right != null){
            this.right.printInOrder()
        }
    }
}

function getHeight(root){
    if(root === null){
        return -1
    } else {
        let left = getHeight(root.left)
        let right = getHeight(root.right)

        console.log(Math.max(left, right) + 1)
        return Math.max(left, right) + 1
    }
}

const arr = [ 4, 6, 8, 2, 3, 7, 12, 1]
let rootNode = new Node(arr[0])
for(let i = 1; i < arr.length; i++){
    rootNode.insert(arr[i])
}

// console.log(rootNode.root.printInOrder())
// console.log(rootNode)
// rootNode.printInOrder()
getHeight(rootNode)
// rootNode.getHeight(rootNode)

//expected 2 level of height or return of 2
