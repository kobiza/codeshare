const { getFunctionsNames } = require('./callStackParseUtils')
const {createZTimer} = require("./ztimer");

const timer = createZTimer()

const runTask = (time) => new Promise((resolve) => {
    setTimeout(() => resolve(), time)
})

const commonTask = async () => {
    const timerEnd = timer.start(getFunctionsNames(new Error()))
    await runTask(100)
    timerEnd()
}

const step1 = async () => {
    const timerEnd = timer.start(getFunctionsNames(new Error()))
    await commonTask()
    await runTask(200)
    timerEnd()
}

const miniTask = async (label, time) => {
    const timerEnd = timer.start(getFunctionsNames(new Error()))
    await runTask(time)
    timerEnd()
}

const step2Sub1 = async () => {
    const timerEnd = timer.start(getFunctionsNames(new Error()))
    await Promise.all([miniTask('sub1-1', 500), miniTask('sub1-2', 500), miniTask('sub1-3', 600)])
    timerEnd()
}

const step2Sub2 = async () => {
    const timerEnd = timer.start(getFunctionsNames(new Error()))
    await Promise.all([miniTask('sub2-1', 100), miniTask('sub2-2', 100), miniTask('sub2-3', 100), miniTask('sub2-4', 100)])
    timerEnd()
}

const step2 = async () => {
    const timerEnd = timer.start(getFunctionsNames(new Error()))
    await Promise.all([step2Sub1(), commonTask(), step2Sub2()])
    timerEnd()
}

const runMainTask = async () => {
    const timerEnd = timer.start(getFunctionsNames(new Error()))
    await step1().then(async () => await step2()).then(() => {
        timerEnd()
        const store = timer.getStore()
        console.log('store', store)
        const getAllTaskOfName = (name) => Object.values(store).filter(v => v.callStack[0] === name)

        const miniTasks = getAllTaskOfName('miniTask')
        console.log('miniTask', miniTasks)
        const groupBy = (arr, getGroupKey) => {
            return arr.reduce((acc, val, index) => {
                const groupKey = getGroupKey(val, index)
                acc[groupKey] = acc[groupKey] || []
                acc[groupKey].push(val)

                return acc
            }, {})
        }

        const callStackToString = (callStack) => callStack.reverse().join('->')
        const miniTasksGroups = groupBy(miniTasks, v => callStackToString(v.callStack.slice(1)))
        console.log('miniTasksGroups', miniTasksGroups)
    })
}

module.exports = {
    runMainTask
}
