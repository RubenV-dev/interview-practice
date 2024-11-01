class MinIntHeap {
    capacity = 10
    size = 0
    
    items = new Array(this.capacity)
    
    getLeftChildIndex(parentIndex){
        return 2 * parentIndex + 1
    }
    getRightChildIndex(parentIndex){
        return 2 * parentIndex + 2
    }
    getParentIndex(childIndex){
        return (childIndex - 1) / 2
    }
    hasLeftChild(index){
        return this.getLeftChildIndex(index) < this.size;
    }
    hasRightChild(index){
        return this.getRightChildIndex(index) < this.size;
    }
    hasParent(index){
        return this.getParentIndex(index) >= 0;
    }
    leftChild(index){
        return this.items[this.getLeftChildIndex(index)]
    }
    rightChild(index){
        return this.items[this.getRightChildIndex(index)]
    }
    parent(index){
        return this.items[this.getParentIndex(index)]
    }
    
    swap(indexOne, indexTwo){
        let temp = this.items[indexOne]
        this.items[indexOne] = this.items[indexTwo]
        this.items[indexTwo] = temp
    }

    ensureExtraCapacity(){
        if(this.size === this.capacity) {
            newArr = new Array(this.capacity * 2)
            newArr = [...this.items]
            this.items = newArr
        }
    }
    
    peek() {
        if(this.size === 0) throw "illegal state exception"
        return this.items[0]
    }
    
    poll() {
        if(this.size === 0) throw "Illegal state exception"
        let item = this.items[0]
        this.items[0] = this.items[this.size - 1]
        this.size--;
        this.heapifyDown();
        return item;
    }

    pollTarget(value){
        if(this.size === 0) throw "Illegal state exception"
        let targetIndex = this.items.indexOf(value)
        if(targetIndex === undefined){
            throw "No target found in Heap"
        }
        let item = this.items[targetIndex]
        this.items[targetIndex] = this.items[this.size - 1]
        delete this.items[this.size - 1]
        this.size--;
        this.heapifyDown()
        return item
    }
    
    add(item){
        this.ensureExtraCapacity()
        this.items[this.size] = item
        this.size++;
        this.heapifyUp()
    }
    
    heapifyUp() {
        let index = this.size - 1
        while(this.hasParent(index) && this.parent(index) > this.items[index]) {
            this.swap(this.getParentIndex(index), index)
            index = this.getParentIndex(index)
        }
    }
    //something here is not working with negative numbers
    
    heapifyDown() {
        let index = 0
        while(this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index)
            if(this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index) ){
                smallerChildIndex = this.getRightChildIndex(index)
            }

            if(this.items[index] < this.items[smallerChildIndex]){
                break;
            } else {
                this.swap(index, smallerChildIndex)
            }
            index = smallerChildIndex
        }
    }
}

let heap = new MinIntHeap
let inputArr = [2,3,4,5,6,10,-11,-14]

for(let i = 0; i < inputArr.length; i++){
    heap.add(inputArr[i])
    // console.log("Added item", i)
}

// console.log(heap)
// heap.pollTarget(5)
console.log(heap)