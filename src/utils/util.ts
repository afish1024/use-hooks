
export function throttle(fn, delay) {
    let timer = null

    return (...args) => {
        const that = this

        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(that, args)
                clearTimeout(timer)
                timer = null
            }, delay || 0)
        }
    }
}