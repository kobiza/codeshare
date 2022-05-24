
const chunk = (array, size = 1) => {
    return array.reduce((acc, val, index) => {
        if (index % size === 0) {
            acc.push(array.slice(index, index + size))
        }

        return acc
    }, [])
}

module.exports = {
    chunk
}
