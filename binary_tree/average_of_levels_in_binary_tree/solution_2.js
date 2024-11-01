// Solution uses an array as the queue
const averageOfLevelsInTree = (root) => {
    let result = []
    if(root === null) return result
    let queue = []
    queue.push(root)

    while(queue.length > 0){
        let sum = 0
        let size = queue.length

        for(let i = 0; i < size; i++){
            let node = queue.shift()
            sum += node.val

            if(node.left !== null){
                queue.push(node.left)
            }
            if(node.right !== null){
                queue.push(node.right)
            }
        }
        result.push(sum / size)
    }
    return result

}

let root = [3, 9, 20, null, null, 15,7]
averageOfLevelsInTree(root)