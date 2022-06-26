const getUid = () => Math.random().toString(16).slice(-4)

const createZTimer = () => {
    const store = {}
    const start = (callStack) => {
        const taskId = getUid()
        const startTime = Date.now()

        return () => {
            const endTime = Date.now()
            store[taskId] = {
                callStack,
                startTime,
                endTime,
                duration: endTime - startTime
            }
        }
    }

    const getStore = () => {
        return store
    }

    return {
        getStore,
        start
    }
}

module.exports = {
    createZTimer
}
