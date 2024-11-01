let hasCycle = (llistHead) => {
    if(llistHead === null){
        return 0;
    }
    let current = llistHead
    let previous = null
    
    while(current.next !== null){
        
        if(current.next === previous){
            return 1;
        }
        previous = current
        current = current.next
    }
    
    return 0;
}