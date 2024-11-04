let hasCycle = (head) => {
    let fast = head;
    let slow = head;

    //one pointer moves twice as fast as the slower one, if there is a cycle eventually the fast pointer would be the same as the slow one.
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast === slow) {
            return true;
        }
    }

    return false;  
}

//Time Complexity O(n)
//Space Complexity O(1)

//Example1 Input: head = [3,2,0,-4], pos = 1 Output: true
//Example2 Input: head = [1,2], pos = 0 Output: true
