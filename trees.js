class Node {
    constructor(val, children=[]) {
        this.val = val;
        this.children = children
    }
      findDFS(val) {
      const stack = [this]
      while(stack.length) {
          const curr = stack.pop();
          console.log("visiting", curr.val)
          if(curr.val === val) {
              return curr
          }
          for(let child of curr.children) {
              stack.push(child)
          }
      }
  }

    findBFS(val) {
        const queue = [this]
        while(queue.length) {
            const curr = queue.shift();
            console.log("visiting", curr.val)
            if(curr.val === val) {
                return curr
            }
            for(let child of curr.children) {
                queue.push(child)
            }
        }
    }
}

class Tree {
    constructor(root) {
        this.root = root
    }
    findInTreeDFS(val) {
        return this.root.findDFS(val)
    }
    findInTreeBFS(val) {
        return this.root.findBFS(val)
    }
    sumValues() {
    const queue = [this.root]
    let sum = 0
    while(queue.length) {
        const curr = queue.shift()
        sum += curr.val
        for(let child of curr.children) {
            queue.push(child)
        }
    }
    return sum
}
}



let family = new Node("Parent", [
    new Node("1st child", [new Node("grandchild")]),
    new Node("2nd child", [new Node("other grandchild", [new Node("another great grandchild"), new Node("great grandchild")])])
]);

let values = new Tree(3, [
    new Tree(3, 4)
])

