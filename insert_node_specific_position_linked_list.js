function insertNodeAtPosition(llist, data, position) {
    let head = llist
    let index = 0
    //different while condition
    while(head !== null){
        if(index == (position - 1)){
            let newnode = {data: data, next: head.next}
            head.next = newnode
        }else{
            head = head.next
        }
        index++
    }
    return llist
}

//for some reaon this solution is runnin into a time limit exceed error
//so my error in logic was assuming i could insert the node while i was in that position,
//we are suppose to go one before it and use the info we have for the next to assign the 
//new nodes value to that next and change the current next to the position we are reaching

//this WAS WRONG!!!!!!!!!!!!!!!!!!!!!!!!! above is correct!!!!!!!!!!!!!!!!!!!!!
function insertNodeAtPosition(llist, data, position) {
    // Write your code here
    let current = llist;
    let counter = 0;
   
    while(current.next !== null){
        if(counter === (position - 1)){
            let newNode = new SinglyLinkedListNode(data);
            //wy do we need this new nodes next value to equal 
            newNode.next = current.next;
            current.next = newNode;
        } else {
            current = current.next;
        }
        counter++
    }
    
    console.log(llist)
    return llist;

}