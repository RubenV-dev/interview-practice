class Node {
    left = null;
    right = null;
    data;

    constructor(data){
        this.data = data
    }

    insert(value){
        if(value <= data){
            if(this.left === null){
                this.left = new Node(value)
            }else{
                this.left.insert(value)
            }
        }else {
            if(this.right === null){
                this.right = new Node(right)
            }else {
                this.right.insert(value)
            }
        }
        return this.data
    }
    contains(value){
        if( value === this.data){
            return true
        } else if ( value < this.data){
            if(this.left === null){
                return false
            }else {
                this.left.contains(value)
            }
        } else {
            if(this.right === null){
                return false
            }else{
                this.right.contains(value)
            }
        }
    }
    printInOrder(){
        if(left !== null){
            this.left.printInOrder()
        }
        console.log(this.data)
        if(right !== null){
            this.right.printInOrder()
        }
    }
    

}