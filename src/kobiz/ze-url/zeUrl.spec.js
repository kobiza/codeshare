const _ = require('lodash')
const getZeUrlApi = require('./zeUrl')
const dbApi = require('./db')
const zeUrlApi = getZeUrlApi(dbApi)

describe('zeUrlApi', () => {
    describe('autoCompleteParamName', () => {
        it('should return [debug, disableSave] for d', () => {
            const result = zeUrlApi.autoCompleteParamName('d')

            const ar = result.sort()
            const er = ['debug', 'disableSave', 'demo'].sort()

            expect(ar.length).toEqual(er.length)
            _.forEach(er, (v, i) => {
                expect(ar[i]).toEqual(er[i])
            })
        });

        it('should return [debug, demo] for de', () => {
            const result = zeUrlApi.autoCompleteParamName('de')

            const ar = result.sort()
            const er = ['debug', 'demo'].sort()

            expect(ar.length).toEqual(er.length)
            _.forEach(er, (v, i) => {
                expect(ar[i]).toEqual(er[i])
            })
        });

        it('should return [demo] for dem', () => {
            const result = zeUrlApi.autoCompleteParamName('de')

            const ar = result.sort()
            const er = ['debug', 'demo'].sort()

            expect(ar.length).toEqual(er.length)
            _.forEach(er, (v, i) => {
                expect(ar[i]).toEqual(er[i])
            })
        });
    });

    describe('autoCompleteParamValue', () => {
        // todo - create getDB func that can get mock data and create mocks for tests with complectaed scenarios
    });
});
