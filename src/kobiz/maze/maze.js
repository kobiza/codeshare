const hasPath = (mat, src, dst) => {
    const rows = mat.length
    const columns = mat[0].length

    const getNeighbours = (node) => {
        return [[node[0] - 1, node[1]], [node[0], node[1] - 1], [node[0] + 1, node[1]], [node[0], node[1] + 1]]
            .filter(([i, j]) => i >= 0 && i < rows && j >= 0 && j < columns)
    }

    const isSameNode = ([i1, j1], [i2, j2]) => i1 === i2 && j1 === j2
    const visitedMap = {}
    const getNodeKey = ([i, j]) => `${i},${j}`
    const markVisited = (node) => visitedMap[getNodeKey(node)] = true
    const isVisited = (node) => !!visitedMap[getNodeKey(node)]
    const isFree = ([i, j]) => mat[i][j] === 0

    const hasPathRec = (node) => {
        markVisited(node)
        if (isSameNode(node, dst)) {
            return true
        }

        return getNeighbours(node).filter(neighbour => {
            return !isVisited(neighbour) && isFree(neighbour)
        }).some((neighbour) => hasPathRec(neighbour))
    }

    return hasPathRec(src)
}

const hasPathIteration = (mat, src, dst) => {
    const rows = mat.length
    const columns = mat[0].length

    const getNeighbours = (node) => {
        return [[node[0] - 1, node[1]], [node[0], node[1] - 1], [node[0] + 1, node[1]], [node[0], node[1] + 1]]
            .filter(([i, j]) => i >= 0 && i < rows && j >= 0 && j < columns)
    }

    const isSameNode = ([i1, j1], [i2, j2]) => i1 === i2 && j1 === j2
    const visitedMap = {}
    const getNodeKey = ([i, j]) => `${i},${j}`
    const markVisited = (node) => visitedMap[getNodeKey(node)] = true
    const isVisited = (node) => !!visitedMap[getNodeKey(node)]
    const isFree = ([i, j]) => mat[i][j] === 0

    const stack = [src]

    while (stack.length > 0) {
        const node = stack.pop()
        markVisited(node)

        if (isSameNode(node, dst)) {
            return true
        }

        const nodesToCheck = getNeighbours(node).filter(neighbour => {
            return !isVisited(neighbour) && isFree(neighbour)
        })

        nodesToCheck.forEach(n => stack.push(n))
    }

    return false
}

const getPath = (mat, src, dst) => {
    const rows = mat.length
    const columns = mat[0].length

    const getNeighbours = (node) => {
        return [[node[0] - 1, node[1]], [node[0], node[1] - 1], [node[0] + 1, node[1]], [node[0], node[1] + 1]]
            .filter(([i, j]) => i >= 0 && i < rows && j >= 0 && j < columns)
    }

    const isSameNode = ([i1, j1], [i2, j2]) => i1 === i2 && j1 === j2
    const visitedMap = {}
    const getNodeKey = ([i, j]) => `${i},${j}`
    const markVisited = (node) => visitedMap[getNodeKey(node)] = true
    const isVisited = (node) => !!visitedMap[getNodeKey(node)]
    const isFree = ([i, j]) => mat[i][j] === 0

    const getPathRec = (node) => {
        markVisited(node)
        if (isSameNode(node, dst)) {
            return [node]
        }

        const neighbours =  getNeighbours(node).filter(neighbour => {
            return !isVisited(neighbour) && isFree(neighbour)
        })

        for (const neighbour of neighbours) {
            const path = getPathRec(neighbour)

            if (path) {
                return [node, ...path]
            }
        }

        return null
    }

    return getPathRec(src)
}

const getShortestPath = (mat, src, dst) => {
    const rows = mat.length
    const columns = mat[0].length

    const getNeighbours = (node) => {
        return [[node[0] - 1, node[1]], [node[0], node[1] - 1], [node[0] + 1, node[1]], [node[0], node[1] + 1]]
            .filter(([i, j]) => i >= 0 && i < rows && j >= 0 && j < columns)
    }

    const isSameNode = ([i1, j1], [i2, j2]) => i1 === i2 && j1 === j2
    const visitedMap = {}
    const getNodeKey = ([i, j]) => `${i},${j}`
    const markVisited = (node) => visitedMap[getNodeKey(node)] = true
    const isVisited = (node) => !!visitedMap[getNodeKey(node)]
    const isFree = ([i, j]) => mat[i][j] === 0

    const fromMap = {}
    const queue = [src]

    const generatePath = (_node) => {
        let currNode = _node
        const path = []

        while (currNode) {
            path.push(currNode)
            const nextKey = fromMap[getNodeKey(currNode)]
            currNode = nextKey ? nextKey.split(',').map(v => parseInt(v)) : nextKey
        }

        return path.reverse()
    }

    while (queue.length > 0) {
        const node = queue.shift()

        markVisited(node)
        if (isSameNode(node, dst)) {
            return generatePath(node)
        }

        const neighbours =  getNeighbours(node).filter(neighbour => {
            return !isVisited(neighbour) && isFree(neighbour)
        })

        for (const neighbour of neighbours) {
            queue.push(neighbour)
            fromMap[getNodeKey(neighbour)] = getNodeKey(node)
        }
    }


    return null
}

module.exports = {
    hasPath,
    getPath,
    hasPathIteration,
    getShortestPath
}
