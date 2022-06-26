
const createTimer = (prefix) => {
    let startTime = 0
    const steps= {}
    const start = () => {
        startTime = Date.now()
        console.log(`${prefix} Started`)
    }

    const startStep = (label) => {
        steps[label] = {
            startTime: Date.now()
        }

        console.log(`${prefix} - ${label} Started ${steps[label].startTime - startTime}`)
    }

    const endStep = (label) => {
        steps[label] = {
            ...steps[label],
            endTime: Date.now()
        }

        console.log(`${prefix} - ${label} Ended ${steps[label].endTime - startTime} step time: ${steps[label].endTime - steps[label].startTime}`)
    }

    const end = () => {
        console.log(`${prefix} Ended total time: ${Date.now() - startTime}`)
    }
    return {
        start,
        startStep,
        endStep,
        end
    }
}

module.exports = {
    createTimer
}
