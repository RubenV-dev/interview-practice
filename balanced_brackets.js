class Node {
    data = null;
    next = null;
    constructor(data){
        this.data = data
    }
}

class Stack {
    top = null;

    isEmpty(){
        return this.top === null
    }
    peek(){
        return this.top.data
    }

    add(data){
        let node = new Node(data)
        if(this.top !== null){
            node.next = this.top
        }
        this.top = node
    }

    pop(){
        let data = this.top.data
        if(this.top == null){
            return
        }
        this.top = this.top.next
        return data
    }
}

function isOpen(data) {
    return data === "{" || data === "[" || data === "("
}

"{({"

function isBalanced(s){
    let hashMap = {
        ")" : "(",
        "]" : "[",
        "}" : "{",
        "(" : ")",   
        "[" : "]",
        "{" : "}",
    }

    let stack = new Stack()
    for(let i = 0; i < s.length; i++){
        let currentLetter = s[i]

        // if(isOpen(currentLetter)){
        //     stack.add(currentLetter)
        // }else{
        //     if(stack.peek() === hashMap[currentLetter]){
        //         stack.pop()
        //     }else{
        //         console.log("NO")
        //         return "NO"
        //     }
        // }

        if(stack.isEmpty()){
            stack.add(currentLetter)
        }else{
            if(stack.peek() === hashMap[currentLetter]){
                stack.pop()
            }else {
                stack.add(currentLetter)
            }
        }

    

    }

    if(stack.isEmpty()){
        console.log("YES")
        return "YES"
    } else {
        console.log("NO")
        return "NO"
    }

}

isBalanced("({}([][]))[]()")
// isBalanced("{({")



// }][}}(}][))]
// [](){()}
// ()
// ({}([][]))[]()
// {)[](}]}]}))}(())(
// ([[)