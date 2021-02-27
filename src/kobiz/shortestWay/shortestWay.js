

var shortestWay = function({distancesMatrix, src, dest}) {
    let minCost = Number.MAX_SAFE_INTEGER
    let shortestPath = null
    const findRec = (_src, path, cost) => {
        const newPath = path.concat([_src])
        if (_src === dest) {
            if (cost < minCost) {
                minCost = cost
                shortestPath = newPath
            }
            console.log(newPath, cost)
            return
        }
        for (let i = _src + 1; i <= dest; i++) {
            findRec(i, newPath, cost + distancesMatrix[_src][i])
        }
    }

    findRec(src, [], 0)
    return {minCost, shortestPath}
};

module.exports = shortestWay;

