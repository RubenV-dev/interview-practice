let averageOfLevelsInTree = (root) => {
    let result = []
    if(root === null) return result

    let queue = new Queue(root)

    while(!queue.isEmpty()){
        let size = queue.size();
        let sum = 0;

        for(let i =0; i < size; i++){
            let node = queue.poll()
            sum += node.data
            if(node.left !== null){
                queue.add(root.left)
            }
            if(node.right !== null){
                queue.add(root.left)
            }
            
        }
        result.add(sum / size)
    }
    console.log(result)
    return result

}

let root = [3, 9, 20, null, null, 15,7]
averageOfLevelsInTree(root)