class Node {
    data;
    next;

    constructor(data){
        this.data = data
    }
}

class LinkedList {
    head;

    append(data){
        let current = this.head
        while(current != null){
            current = current.next
        }
        current.next = data
    }

    prepend(data){
        let newHead = new Node(data)
        newHead.next = this.head
        this.head = newHead
    }

    deleteWithValue(data){
        if(this.head == null){
            return
        }

        if(this.head.data == data){
            this.head = this.head.next
            return;
        }

        let current = this.head
        while(current.next != null){
            if(current.next.data == data){
                current.next = current.next.next
            }
            current = current.next
        }
    }
}
