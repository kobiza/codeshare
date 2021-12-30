const _ = require('lodash')

const localDB = {
    zeurl: {
        contexts: {
            c1: {
                name: 'wix-dev',
                knownSearchParams: {
                    disableSave: {
                        type: 'enum',
                        values: ['true']
                    },
                    demo: {
                        type: 'array',
                        values: ['d1', 'd2', 'd3']
                    },
                    experiments: {
                        type: 'array',
                        values: ['experiment1', 'experiment1', 'spec.myNewSpec'],
                        separator: ','
                    },
                    debug: {
                        type: 'enum',
                        values: ['all', 'viewer']
                    },
                    // admin: {
                    //     type: 'noValue'
                    // },
                    // debug: {
                    //     type: 'or',
                    //     values: [
                    //         {
                    //             type: 'enum',
                    //             values: ['true', 'false']
                    //         },
                    //         {
                    //             type: 'noValue'
                    //         }
                    //     ]
                    // }
                },
                presets: {
                    p1: {
                        name: 'debug-my-exp',
                        searchParams: {
                            debug: 'true',
                            experiments: ['spec.myNewSpec']
                        }
                    }
                }
            }
        },
        contextIdByName: {
            'wix-dev': 'c1'
        }
    }
}

const dbApi = {
    get: (path) => _.get(localDB, path)
}

module.exports = dbApi
