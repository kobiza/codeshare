var stats = [
    [59,24,17],
    [69,20,11],
    [40,30,30],
    [30,30,40],
    [33,30,37],
    [45,27,28],
    [40,30,30],
    [50,30,20],
    [50,30,20],
    [35,27,38],
    [31,32,37],
    [28,30,42],
    [39,30,31],
    [36,31,33],
    [27,30,43],
    [41,31,28]
]

var getNumbers = (n) => {
    const decimalSplit = stats.map((pctArr) => {
        return pctArr.map(v => v/100 * n)
    })
    const floorSplit = stats.map((pctArr) => {
        return pctArr.map(v => Math.floor(v/100 * n))
    })

    const diffs = decimalSplit.map(([x,y,z], index) => {
        const [x1,y1,z1] = floorSplit[index]

        return [x - x1, y - y1, z - z1]
    })

    const orderOfAddExtra = diffs.map(diffArr => {
        return _.sortBy(diffArr.map((value, index) => ({value, index})), ({value}) => 1 - value).map(v => v.index)
    })

    const counterToAdd = floorSplit.map(v => n - _.sum(v))

    const arrToAdd = orderOfAddExtra.map((indexOrdered, index) => {
        const numToAdd = counterToAdd[index]
        const r = [0,0,0]
        for (let i = 0; i < numToAdd; i++) {
            r[indexOrdered[i]]++
        }

        return r
    })

    const finalResult = floorSplit.map(([x,y,z], index) => {
        const [x1,y1,z1] = arrToAdd[index]

        return [x + x1, y + y1, z + z1]
    })

    return finalResult
}

var shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

var toGroups = (numbersArr) => {
    return shuffle(numbersArr.flatMap((n, index) => Array(n).fill(index)))
}

var chunks = (array, chunkSize) => {
    const numberOfChunks = Math.ceil(array.length / chunkSize)

    const indexes = Array(numberOfChunks).fill().map((v, index) => {
        return index * chunkSize
    })

    return indexes.map((v, index) => {
        const start = indexes[index]
        const end = index === indexes.length - 1 ? undefined : indexes[index + 1]
        return array.slice(start, end)
    })
}

var getWin16 = (rows, chunkSize = 10) => {
    const r = getNumbers(rows).map(v => toGroups(v)).map(v => chunks(v, chunkSize))
    const k = Array(r[0].length).fill().map(() => [])

    return r.reduce((acc, value) => {
        value.forEach((v, i) => {
            acc[i].push(v)
        })

        return acc
    }, k)
}
var games = document.querySelector('.games')
var rows = games.querySelectorAll('li')
var buttonsMatrix = [...rows].map(r => [...r.querySelectorAll('tr')].slice(1).map(tr => [...tr.querySelectorAll('.outcome')]))

var rowsToFill = getWin16(15)

console.log(rowsToFill.length)

var writeForm = (index) => {
    rowsToFill[index].forEach((row, rowIndex) => row.forEach((cell, cellIndex) => {
        buttonsMatrix[cellIndex][rowIndex][cell].click()
    }))
}

console.log('please run writeForm(formIndex)')
