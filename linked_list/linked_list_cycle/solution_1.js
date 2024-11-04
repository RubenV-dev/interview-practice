let hasCycle = (llistHead) => {
    if(llistHead === null){
        return false;
    }
    let current = llistHead
    let previous = null
    
    while(current.next !== null){
        
        if(current.next === previous){
            return true;
        }
        previous = current
        current = current.next
    }
    
    return false;
}

//this solution gets a time limit exceed error in Leetcode, might have an infinite loop condition.