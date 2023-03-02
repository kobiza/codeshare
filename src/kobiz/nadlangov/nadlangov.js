const {allData} = require('./data')
const floorToNumber = require('./floorToNumber')
const _ = require('lodash')

const sample = allData.slice(0, 10)
const row = allData[0]

// "06.04.2022"
const dateToDateObj = (v) => {
    const [dd, mm, yyyy] = v.trim().split('.').map(v => parseInt(v))

    return {dd, mm, yyyy}
}

// "5"
const roomNumberToNumber = (v) => parseInt(v.trim())

// "שישית"
// const floorToNumber = (v) => v

// "130"
const sizeToNumber = (v) => parseInt(v.trim())

// "3,150,000 "
const amountToNumber = (v) => parseInt(v.trim().replaceAll(',', ''))

const gushToAddress = {
    // to ignore
    '6867-60': '',
    '7173-291': '',
    '6867-16': '',
    // no address in giv DB
    '7173-306': 'הסתדרות פיכמן',
    '6867-33': 'היינץ פיכמן',
    //
    '6867-20': 'צבי תדמור 1',
    '6867-21': 'צבי תדמור 3',
    '6867-22': 'פיכמן 21',
    '6867-23': 'פיכמן 17',
    '6867-25': 'פיכמן 13',
    '6867-26': 'פיכמן 11',
    '6867-27': 'פיכמן 15',
    '6867-44': 'דגניה 6',
    '6867-45': 'דגניה 8',
    '6867-46': 'דגניה 10',
    '6867-47': 'דגניה 12',
    '6867-48': 'צבי תדמור 4',
    '6867-49': 'צבי תדמור 2',
    '6867-50': 'גולדה מאיר 3',
    '6867-51': 'צבי תדמור 6',
    '6867-52': 'צבי תדמור 10',
}

const fixAddress = (address, gush) => {
    if (address.trim()) {
        return address.trim()
    }

    const [g1, g2] = gush.split('-')
    return gushToAddress[`${g1}-${g2}`]
}

const fixRow = (row) => {
    const {date, address, gush, type, roomNumber, floor, size, amount} = row

    return {
        date: dateToDateObj(date),
        address: fixAddress(address, gush),
        gush,
        type,
        roomNumber: roomNumberToNumber(roomNumber),
        floor: floorToNumber(floor),
        size: sizeToNumber(size),
        amount: amountToNumber(amount),
    }
}

// const bla = allData.map(v => ({original: v.floor, result: floorToNumber(v.floor)})).filter(v => !v.result).map(v => v.original)
// const bla2 = _.uniq(bla)

const fixed = allData.map(_row => fixRow(_row))
const originalWithFixed = allData.map(_row => ({original: _row, fixed: fixRow(_row)}))

const fixedRows = fixed.filter(({address, roomNumber, floor, amount}) => roomNumber  && floor && amount)
