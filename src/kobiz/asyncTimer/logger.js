const a = {
    '5716': {
    callStack: [ 'step2Sub1', 'step2', 'mainTask2.js:49:42', 'runMainTask' ],
        startTime: 1656010409530,
        endTime: 1656010410132,
        duration: 602
},
    '7204': {
    callStack: [
        'miniTask',
        'step2Sub2',
        'step2',
        'mainTask2.js:49:42',
        'runMainTask'
    ],
        startTime: 1656010409532,
        endTime: 1656010409633,
        duration: 101
},
    '7673': {
    callStack: [
        'miniTask',
        'step2Sub2',
        'step2',
        'mainTask2.js:49:42',
        'runMainTask'
    ],
        startTime: 1656010409532,
        endTime: 1656010409633,
        duration: 101
},
    '9121': {
    callStack: [ 'commonTask', 'step2', 'mainTask2.js:49:42', 'runMainTask' ],
        startTime: 1656010409531,
        endTime: 1656010409633,
        duration: 102
},
    '4c73': {
    callStack: [ 'commonTask', 'step1', 'runMainTask' ],
        startTime: 1656010409227,
        endTime: 1656010409329,
        duration: 102
},
    '446f': {
    callStack: [ 'step1', 'runMainTask' ],
        startTime: 1656010409226,
        endTime: 1656010409530,
        duration: 304
},
    '0214': {
    callStack: [
        'miniTask',
        'step2Sub2',
        'step2',
        'mainTask2.js:49:42',
        'runMainTask'
    ],
        startTime: 1656010409531,
        endTime: 1656010409633,
        duration: 102
},
    ffcb: {
        callStack: [
            'miniTask',
            'step2Sub2',
            'step2',
            'mainTask2.js:49:42',
            'runMainTask'
        ],
            startTime: 1656010409532,
            endTime: 1656010409633,
            duration: 101
    },
    e9e1: {
        callStack: [ 'step2Sub2', 'step2', 'mainTask2.js:49:42', 'runMainTask' ],
            startTime: 1656010409531,
            endTime: 1656010409633,
            duration: 102
    },
    dc19: {
        callStack: [
            'miniTask',
            'step2Sub1',
            'step2',
            'mainTask2.js:49:42',
            'runMainTask'
        ],
            startTime: 1656010409530,
            endTime: 1656010410031,
            duration: 501
    },
    ba08: {
        callStack: [
            'miniTask',
            'step2Sub1',
            'step2',
            'mainTask2.js:49:42',
            'runMainTask'
        ],
            startTime: 1656010409530,
            endTime: 1656010410031,
            duration: 501
    },
    '3a3f': {
    callStack: [
        'miniTask',
        'step2Sub1',
        'step2',
        'mainTask2.js:49:42',
        'runMainTask'
    ],
        startTime: 1656010409531,
        endTime: 1656010410132,
        duration: 601
},
    '301d': {
    callStack: [ 'step2', 'mainTask2.js:49:42', 'runMainTask' ],
        startTime: 1656010409530,
        endTime: 1656010410132,
        duration: 602
},
    '5ee5': {
    callStack: [ 'runMainTask' ],
        startTime: 1656010409226,
        endTime: 1656010410132,
        duration: 906
}
}

const result = {

}

const getTree = (callstackData) => {
    Object.values(callstackData).reduce((acc, value) => {
        const calls = [...value.callStack]
        let next = calls.pop()
        while(next) {
            acc[next]
            next = calls.pop()
        }

        return acc
    }, {})
}
