const _ = require('lodash')
// what i will need to override on source to be like target
var getDiff = function(source, toBeLike) {
    const getNegativeValue = (val) => {
        const nMap = {
            old: 'new',
            new: 'old',
            true: 'false',
            false: 'true',
        }

        const newVal = nMap[val]

        return _.isUndefined(newVal) ? 'unknown' : newVal
    }
    const allKeys = _.uniq([..._.keys(source), ..._.keys(toBeLike)])

    return _(allKeys)
        .filter(k => source[k] !== toBeLike[k])
        .map(k => ({key: k, src: source[k], tgt: toBeLike[k]}))
        .map(data => {
            if (_.isUndefined(data.tgt)) {
                return {...data, tgt: getNegativeValue(data.src)}
            }

            return data
        })
        .value()
};

var originalExp = 'se_newAddPanel:old;specs.UseTBAsMainRScript:true;'

var diffToStr = (diff, initialPetri = '') => initialPetri + diff.map(({key, tgt}) => `${key}:${tgt};`).join('')

var toHalf = arr => {
    const center = Math.floor(arr.length / 2 )

    return [arr.slice(0, center), arr.slice(center)]
}

var _getUrl = (petriStr) => `https://editor.wix.com/html/editor/web/renderer/edit/725fe182-16dd-4729-8a08-52eb1881a5d6?metaSiteId=685b488f-22be-42d7-b325-9ddffed6a086&disableSave=true&autosaveRestore=false&disableAutoSave=true&isqa=true&petri_ovr=${petriStr}&disable_hash_dist=true`

var getUrl = (phase) => {
    const petri = diffToStr(phase, originalExp)

    return _getUrl(petri)
}

var getUrlWithLessPetri = (diff, minus) => {
    const petri = diffToStr(diff.slice(0, diff.length - minus), originalExp)

    return _getUrl(petri)
}

module.exports = getDiff;

