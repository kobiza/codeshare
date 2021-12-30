const _ = require('lodash')

const getZeUrlApi = (db) => {
    const activeContextName = 'wix-dev'
    const allData = db.get('zeurl')
    const activeContextId = allData.contextIdByName[activeContextName]
    const activeContext = allData.contexts[activeContextId]
    const knowSearchParamsNames = _.keys(activeContext.knownSearchParams)

    const autoComplete = (options, prefix) => _.filter(options, (s) => _.startsWith(s, prefix))
    const autoCompleteParamName = (prefix) => autoComplete(knowSearchParamsNames, prefix)
    const getOptionsForParam = (paramName, prefix, activeOptions) => {
        if (!activeContext.knownSearchParams[paramName]) {
            return []
        }

        return activeContext.knownSearchParams[paramName].values.filter(v => !activeOptions[v])
    }
    const autoCompleteParamValue = (paramName, prefix, activeOptions = {}) => {
        const options = getOptionsForParam(paramName, prefix, activeOptions)

        autoComplete(options, prefix)
    }

    return {
        getActiveContext: () => activeContextName,
        autoCompleteParamName,
        autoCompleteParamValue
    }
}

module.exports = getZeUrlApi
