
const state = {
    currentDescribePath: [],
    result: {

    }
}

const runTest = (testCallback) => {
    try {
        testCallback()
    } catch (e) {
        return {passed: false, message: e.message}
    }

    return {passed: true}
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

const myJest = {
    describe: (description, describeCallback) => {
        state.currentDescribePath.push(description)
        describeCallback()

        return state.result
    },
    test: (description, testCallback) => {
        setIn(state.result, [...state.currentDescribePath, description], runTest(testCallback))
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
    // beforeEach: () => {
    //
    // },
    // beforeAll: () => {
    //
    // }
}

const result = myJest.describe('First describe', () => {
    myJest.test('should pass', () => {
        myJest.expect('1').toBe('1')
    })
    myJest.test('should fail', () => {
        myJest.expect('1').toBe('0')
    })

    myJest.describe('inner describe', () => {
        myJest.test('should fail 2', () => {
            myJest.expect('1').toBe('0')
        })
    })
})

console.log(JSON.stringify(result))

module.exports = myJest;
