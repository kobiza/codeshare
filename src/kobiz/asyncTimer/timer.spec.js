const {runMainTask} = require('./mainTask')

describe('timer',() => {
    test('timer', async () => {
        jest.setTimeout(10000);

        return runMainTask().then((v) => {
            console.log('test callback')
            expect(v).not.toBeDefined()
        })
    })
})
