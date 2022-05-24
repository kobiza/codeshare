


//             A
//       B           C
//    D     E
//        F   G



const treeExample = {
    id: 'A',
    children: [{
        id: 'B',
        children: [{
            id: 'D',
            children: []
        }, {
            id: 'E',
            children: [{
                id: 'F',
                children: []
            }, {
                id: 'G',
                children: []
            }]
        }]
    }, {
        id: 'C',
        children: []
    }]
}


/// F, D -> B
// F - A-B-D-E-F
// D - A-B-D

// find path1
// find path2
// cut extra tail
// move on both paths until you find similar key


// if i had parent
// find 2 depth
// cut the longer path
// go up until you will find the common

// todo - with passing path
const findPath = (currNode, targetNodeKey, path = []) => {
    if (currNode.id === targetNodeKey) {
        return [targetNodeKey]
    }

    for (const child of currNode.children) {
        const childPath = findPath(child, targetNodeKey, [...path, currNode.id])

        if (childPath) {
            return [currNode.id, ...childPath]
        }
    }

    return null
}


const findLowestCommonAncestor = (tree, node1Key, node2Key) => {
    const findPath = (currNode, nodeKey) => {
        if (currNode.id === nodeKey) {
            return [nodeKey]
        }

        for (const child of currNode.children) {
            const childPath = findPath(child, nodeKey)

            if (childPath) {
                return [currNode.id, ...childPath]
            }
        }

        return null
    }

    const path1 = findPath(tree, node1Key)
    const path2 = findPath(tree, node2Key)

    let levelToCheck = Math.min(path1.length, path2.length) - 1

    while (path1[levelToCheck] !== path2[levelToCheck]) {
        levelToCheck--
    }

    return path1[levelToCheck]
}

const treeWithParentExample = {
    A: null,
    B: 'A',
    C: 'A',
    D: 'B',
    E: 'B',
    F: 'E',
    G: 'E'
}

const findLowestCommonAncestorWithParent = (treeWithParentExample, node1Key, node2Key) => {
    const getDepth = (nodeKey) => {
        let nextNode = treeWithParentExample[nodeKey]
        let depth = 0

        while (nextNode) {
            depth++
            nextNode = treeWithParentExample[nextNode]
        }

        return depth
    }

    const depth1 = getDepth(node1Key)
    const depth2 = getDepth(node2Key)

    const commonDepth = Math.min(depth1, depth2)

    const getNodeInPath = (nodeKey, delta) => {
        let currNode = nodeKey

        while (delta) {
            currNode = treeWithParentExample[currNode]
            delta--
        }

        return currNode
    }

    let path1CurrNode = getNodeInPath(node1Key, depth1 - commonDepth)
    let path2CurrNode = getNodeInPath(node2Key, depth2 - commonDepth)

    while (path1CurrNode !== path2CurrNode) {
        path1CurrNode = treeWithParentExample[path1CurrNode]
        path2CurrNode = treeWithParentExample[path2CurrNode]
    }

    return path1CurrNode
}

const A = { parent: '' }
const B = { parent: A}
const C = { parent: A}
const D = { parent: B}
const E = { parent: B}
const F = { parent: E}
const G = { parent: E}

const findLowestCommonAncestorWithParent2 = (node1, node2) => {
    const getDepth = (node) => {
        let nextNode = node.parent
        let depth = 0

        while (nextNode) {
            depth++
            nextNode = nextNode.parent
        }

        return depth
    }

    const depth1 = getDepth(node1)
    const depth2 = getDepth(node2)

    const commonDepth = Math.min(depth1, depth2)

    const getParentInLevel = (node, delta) => {
        let currNode = node

        while (delta) {
            currNode = currNode.parent
            delta--
        }

        return currNode
    }

    let currNode1 = getParentInLevel(node1, depth1 - commonDepth)
    let currNode2 = getParentInLevel(node2, depth2 - commonDepth)

    while (currNode1 !== currNode2) {
        currNode1 = currNode1.parent
        currNode2 = currNode2.parent
    }

    return currNode1
}


const root = {
    id: 'A',
    left: {
        id: 'B',
        left: {
            id: 'D',
        },
        right: {
            id: 'E',
            left: {
                id: 'F',
            },
            right: {
                id: 'G',
            }
        }
    },
    right: {
        id: 'C'
    }
}

const findLowestCommonAncestor2 = (root, a, b) => {
    if (root === a || root === b || !root) {
        return root
    }

    const leftResult = findLowestCommonAncestor2(root.left, a, b)
    const rightResult = findLowestCommonAncestor2(root.right, a, b)

    if (leftResult && rightResult) {
        return root
    }

    return leftResult || rightResult
}

module.exports = {
    findLowestCommonAncestor,
    findLowestCommonAncestor2,
    findLowestCommonAncestorWithParent,
    findLowestCommonAncestorWithParent2
}
