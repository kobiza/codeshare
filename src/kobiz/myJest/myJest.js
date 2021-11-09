
// const describeData = {
//     key: {
//         description: tex,
//         describes: [describeKey],
//         tests: [{
//             description: text,
//             callback
//         }],
//         beforeEach: [callback],
//         beforeAll: [callback],
//     }
// }

let describeCounter = 0

const state = {
    describeQueue: [],
    currentDescribeKey: 0,
    describeData: {},
    result: {

    }
}

const getTestCallback = (testCallback) => {
    return () => {
        try {
            testCallback()
        } catch (e) {
            return {passed: false, message: e.message}
        }

        return {passed: true}
    }
}

const setIn = (obj, path, value) => {
    if (path.length === 1) {
        obj[path[0]] = value
        return
    }

    const key = path[0]

    if (!obj[key]) {
        obj[key] = {}
    }

    setIn(obj[key], path.slice(1), value)
}

const createDescribe = (key, description) => {
    state.describeData[key] = {
        description,
        beforeEach: [],
        afterEach: [],
        beforeAll: [],
        afterAll: [],
        describes: [],
        tests: [],
    }
}

const addTest = (key, description, callback) => {
    state.describeData[key].tests.push({description, callback})
}
const addBeforeEach = (key, callback) => {
    state.describeData[key].beforeEach.push({callback})
}
const addBeforeAll = (key, callback) => {
    state.describeData[key].beforeAll.push({callback})
}
const addAfterEach = (key, callback) => {
    state.describeData[key].afterEach.push({callback})
}
const addAfterAll = (key, callback) => {
    state.describeData[key].afterAll.push({callback})
}
const addDescribe = (key, innerDescribeKey) => {
    state.describeData[key].describes.push(innerDescribeKey)
}

const myJest = {
    describe: (description, describeCallback) => {
        const describeKey = describeCounter++
        state.describeQueue.push(describeKey)
        createDescribe(describeKey, description)
        state.currentDescribeKey = describeKey
        describeCallback()

        state.describeQueue.pop()
        if (state.describeQueue.length > 0) {
            addDescribe(state.describeQueue[state.describeQueue.length - 1], describeKey)
        }

        return state.describeData
    },
    test: (description, testCallback) => {
        addTest(state.currentDescribeKey, description, getTestCallback(testCallback))
    },
    expect: (actualValue) => {
        return {
            toBe: (expectedValue) => {
                if (actualValue !== expectedValue) {
                    throw new Error(`expected ${expectedValue} but got ${actualValue}`)
                }
            }
        }
    },
    beforeEach: (callback) => {
        addBeforeEach(state.currentDescribeKey, callback)
    },
    beforeAll: (callback) => {
        addBeforeAll(state.currentDescribeKey, callback)
    },
    afterEach: (callback) => {
        addAfterEach(state.currentDescribeKey, callback)
    },
    afterAll: (callback) => {
        addAfterAll(state.currentDescribeKey, callback)
    }
}

const result = myJest.describe('Outer describe', () => {
    myJest.beforeAll(() => {
        console.log('Outer describe - beforeAll')
    })
    myJest.beforeEach(() => {
        console.log('Outer describe - beforeEach')
    })
    myJest.afterAll(() => {
        console.log('Outer describe - afterAll')
    })
    myJest.afterEach(() => {
        console.log('Outer describe - afterEach')
    })
    myJest.test('should pass', () => {
        myJest.expect('1').toBe('1')
    })
    myJest.test('should fail', () => {
        myJest.expect('1').toBe('0')
    })

    myJest.describe('Inner describe', () => {
        myJest.beforeAll(() => {
            console.log('Inner describe - beforeAll')
        })
        myJest.beforeEach(() => {
            console.log('Inner describe - beforeEach')
        })
        myJest.afterAll(() => {
            console.log('Inner describe - afterAll')
        })
        myJest.afterEach(() => {
            console.log('Inner describe - afterEach')
        })
        myJest.test('should fail 2', () => {
            myJest.expect('1').toBe('0')
        })
    })
})

const logDescribe = (describesData, key, {outerBeforeEach, outerAfterEach, level} = {outerBeforeEach: [], outerAfterEach: [], level: 0}) => {
    const log = (message, plus = 0) => console.log(`${Array(level + plus).fill('  ').join('')}${message}`)
    const currDescribe = describesData[key]

    log(`describe: ${currDescribe.description}`)
    currDescribe.beforeAll.forEach(({callback}) => callback())

    const beforeEachCallbacks = [...outerBeforeEach, ...currDescribe.beforeEach]
    const afterEachCallbacks = [...currDescribe.afterEach, ...outerAfterEach]

    currDescribe.tests.forEach(({description, callback}) => {
        beforeEachCallbacks.forEach(({callback}) => callback())
        const result = callback()
        log(`test: ${description} - ${result.passed ? 'V' : 'X'}`, 1)
        afterEachCallbacks.forEach(({callback}) => callback())
    })

    currDescribe.describes.forEach(describeKey => {
        logDescribe(describesData, describeKey, {outerBeforeEach: beforeEachCallbacks, outerAfterEach: afterEachCallbacks, level: level + 1})
    })

    currDescribe.afterAll.forEach(({callback}) => callback())
}

logDescribe(result, 0)

module.exports = myJest;
