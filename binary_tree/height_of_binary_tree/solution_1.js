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

//provided input
const arr = [ 4, 6, 8, 2, 3, 7, 12, 1]

//creating tree...
let rootNode = new Node(arr[0])
for(let i = 1; i < arr.length; i++){
    rootNode.insert(arr[i])
}

getHeight(rootNode)

//expected 2 level of height or return of 2
