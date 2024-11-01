class Node {
    data;
    next;

    constructor(data){
        this.dat = data
    }
}

// class Queue {
//     head; //we remove from here
//     tail; // we add here

//     isEmpty(){
//         return this.head === null
//     }
//     peek(){
//         return this.head.data
//     }
//     enqueue(data){
//         let node = new Node(data)
//         if( this.tail !== null){
//             this.tail.next = node
//         }
//         this.tail = node
//         if( head === null){
//             this.head = node
//         }
//     }
//     dequeue(data){
//         let data = this.head.data
//         this.head = this.head.next
//         if(head == null){
//             this.tail = null
//         }
//         return data
//     }
// }

class Queue {
    constructor(){
        this.pushStack = []
        this.popStack = []
    }

    enqueue(data){
        this.pushStack.push(data)

    }
    dequeue(){

        if(!this.popStack.length){
            while(this.pushStack.length){
                this.popStack.push(this.pushStack.pop())
            }
        }

        return this.popStack.pop()
    }

    isEmpty(){
        return !this.pushStack.length && !this.popStack.length
    }
    peek(){
        if(!this.popStack.length){
            while(this.pushStack.length){
                this.popStack.push(this.pushStack.pop())
            }
        }
        return this.popStack[this.popStack.length - 1]
    }
}

class Q {
    constructor(){
        this.pushStack = []
        this.popStack = []
    }

    peek(){
        if(!this.popStack.length){
            while(this.pushStack.length) this.popStack.push(this.pushStack.pop())
        }
        return this.popStack[this.popStack.length - 1]
    }
    isEmpty(){
        return !this.pushStack.length && !this.popStack.length
    }
    add(data){
        this.pushStack.push(data)
    }
    pop(){
        if(!this.popStack.length){
            while(this.pushStack.length){
                this.popStack.push(this.pushStack.pop())
            }
        }
        return this.popStack.pop()
    }
}