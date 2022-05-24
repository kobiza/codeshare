

Function.prototype.myBind = function(thisArg, ...boundArgs) {
    var fn = this
    return (...args) => {
        return fn.apply(thisArg, [...boundArgs, ...args])
    }
}

const partial = (func, ...partials) => {
    return (...args) => {
        return func(...partials, ...args)
    }
}


const log = (name, message) => {
    console.log(`${name}: ${message}`)
}

const mosheLog = partial(log, 'Moshe')

mosheLog('Hi there')
