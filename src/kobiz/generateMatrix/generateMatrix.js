const right = ([row, col]) => ([row, col + 1])
const down = ([row, col]) => ([row + 1, col])
const left = ([row, col]) => ([row, col - 1])
const top = ([row, col]) => ([row - 1, col])
const directionsFuncOrder = [right, down, left, top]
const getNextDirectionIndex = (index) => index === directionsFuncOrder.length - 1 ? 0 : index + 1

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const initValue = -1
    const matrix = new Array(n).fill().map(() => new Array(n).fill(initValue));
    const matrixSize = n * n

    const isOutOfRange = ([row, col]) => row > n - 1 || row < 0 || col > n - 1 || col < 0
    const isVisited = coordinates => matrix[coordinates[0]][coordinates[1]] !== initValue

    const rec = (number, coordinates, directionIndex) => {
        matrix[coordinates[0]][coordinates[1]] = number

        if (number === matrixSize) {
            return matrix
        }

        const nextCoordinates = directionsFuncOrder[directionIndex](coordinates)

        if(!isOutOfRange(nextCoordinates) && !isVisited(nextCoordinates)) {
            console.log('1', nextCoordinates)
            return rec(number + 1, nextCoordinates, directionIndex)
        } else {
            const nextDirectIndex = getNextDirectionIndex(directionIndex)
            const nextCoordinates = directionsFuncOrder[nextDirectIndex](coordinates)
            console.log('2', nextCoordinates)
            return rec(number + 1, nextCoordinates, nextDirectIndex)
        }
    }

    return rec(1,[0,0], 0)
};

module.exports = generateMatrix;

