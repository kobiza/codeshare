const CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+:\d+|\(native\))/m;
const extractLocation = (urlLike) => {
    // Fail-fast but return locations like "(native)"
    if (urlLike.indexOf(':') === -1) {
        return [urlLike];
    }

    var regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
    var parts = regExp.exec(urlLike.replace(/[()]/g, ''));
    return [parts[1], parts[2] || undefined, parts[3] || undefined];
}

const parseV8OrIE = (stack) => {
    var filtered = stack.split('\n').filter(function(line) {
        return !!line.match(CHROME_IE_STACK_REGEXP);
    });


    return filtered.map(function(line) {
        if (line.indexOf('(eval ') > -1) {
            // Throw away eval information until we implement stacktrace.js/stackframe#8
            line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^()]*)|(\),.*$)/g, '');
        }
        var sanitizedLine = line.replace(/^\s+/, '').replace(/\(eval code/g, '(');

        // capture and preseve the parenthesized location "(/foo/my bar.js:12:87)" in
        // case it has spaces in it, as the string is split on \s+ later on
        var location = sanitizedLine.match(/ (\((.+):(\d+):(\d+)\)$)/);

        // remove the parenthesized location from the line, if it was matched
        sanitizedLine = location ? sanitizedLine.replace(location[0], '') : sanitizedLine;

        var tokens = sanitizedLine.split(/\s+/).slice(1);
        // if a location was matched, pass it to extractLocation() otherwise pop the last token
        var locationParts = extractLocation(location ? location[1] : tokens.pop());
        var functionName = tokens.join(' ') || undefined;
        var fileName = ['eval', '<anonymous>'].indexOf(locationParts[0]) > -1 ? undefined : locationParts[0];

        return {
            functionName: functionName,
            fileName: fileName,
            lineNumber: locationParts[1],
            columnNumber: locationParts[2],
            source: line
        };
    });
}

const sliceAfterRoot = (arr, rootFunc) => arr.slice(0, arr.findIndex(v => v.functionName === rootFunc) + 1)

const sanitizeStackResult = (r) => {
    const removeAsync = (s) => s.replace('async ', '')
    const last = arr => arr[arr.length - 1]


    return r.map((v) => {
        const functionName = !v.functionName || v.functionName === 'Object.<anonymous>' ? '' : removeAsync(v.functionName)

        return {
            functionName,
            file: last(v.source.split('/')).replace(')', '')
        }
    })
}
const getFunctionsNames = (error) => sliceAfterRoot(sanitizeStackResult(parseV8OrIE(error.stack)), 'runMainTask')

module.exports = {
    getFunctionsNames,
    parseV8OrIE
}
