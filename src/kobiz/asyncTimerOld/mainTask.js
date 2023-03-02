const { getFunctionsNames } = require('./callStackParseUtils')

const runTask = (time) => new Promise((resolve) => {
    setTimeout(() => resolve(), time)
})

const commonTask = async () => {
    console.log('commonTask', getFunctionsNames(new Error()))
    await runTask(100)
    console.log('commonTask - end')
}

const step1 = async () => {
    console.log('step1 - start', getFunctionsNames(new Error()))
    await commonTask()
    await runTask(200)
    console.log('step1 - end')
}

const miniTask = async (label, time) => {
    console.log(`miniTask ${label}`, getFunctionsNames(new Error()))

    await runTask(time)
    console.log(`miniTask ${label} - end`)
}

const step2Sub1 = async () => {
    console.log('step2Sub1 - start', getFunctionsNames(new Error()))
    await Promise.all([miniTask('sub1-1', 500), miniTask('sub1-2', 500), miniTask('sub1-3', 600)])
    console.log('step2Sub1 - end')
}

const step2Sub2 = async () => {
    console.log('step2Sub2', getFunctionsNames(new Error()))
    await Promise.all([miniTask('sub2-1', 100), miniTask('sub2-2', 100), miniTask('sub2-3', 100), miniTask('sub2-4', 100)])
    console.log('step2Sub2 - end')
}

const step2 = async () => {
    debugger
    console.log('step2 - start', getFunctionsNames(new Error()))
    await Promise.all([step2Sub1(), commonTask(), step2Sub2()])
    console.log('step2 - end')
}

const runMainTask = async () => {
    console.log('mainTask - start', getFunctionsNames(new Error()))
    await step1().then(async () => await step2()).then(() => {
        console.log('mainTask - end')
    })
}

module.exports = {
    runMainTask
}
