class Node {
    data;
    next;
    constructor(data){
        this.date = data
    }
}

class Queue {
    head;//remove from here
    tail;//add to here

    isEmpty(){
        return this.head == null
    }
    peek(){
        return this.head.data
    }
    add(data){
        let node = new Node(data)
        if(this.tail !== null){
            this.tail.next = node
        }
        this.tail = node
        if( this.head == null){
            this.head = node
        }
    }
    remove(){
        let data = this.head.data
        this.head = this.head.next
        if(this.head == null){
            this.tail = null
        }
        return data;
    }

}

class Stack {
    top;

    isEmpty(){
        return this.top == null
    }
    peek(){
        return this.top.data
    }
    push(data){
       let node = new Node(data)
       if(this.top !== null){
        node.next = top
       }
       this.top = node
    }
    pop(){
        let data = this.top.data
        this.top = this.top.next
        return data
    }
}