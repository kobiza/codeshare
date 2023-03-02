
const chunk = (array, size = 1) => {
    return array.reduce((acc, val, index) => {
        if (index % size === 0) {
            acc.push(array.slice(index, index + size))
        }

        return acc
    }, [])
}

// bla s
const arrToTrueMap = (arr) => {
    return arr.reduce((acc, v) => {
        acc.set(v, true)
        return acc
    }, new Map())
}

const difference = (arr1, arr2) => {
    const arr2TrueMap = arrToTrueMap(arr2)

    return arr1.filter(v => !arr2TrueMap.get(v))
}

module.exports = {
    chunk,
    difference
}
