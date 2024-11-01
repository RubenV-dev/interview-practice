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
        if( this.right !== null){
            this.right.printInOrder()
        }
    }
}

let arr = [6, 4, 2, 1, 3, 7, 6]
let rootNode = new Node(arr[0])
for (let i = 1; i < arr.length; i++){
    let currentValue = arr[i];
    rootNode.insert(currentValue)
}
rootNode.printInOrder()
