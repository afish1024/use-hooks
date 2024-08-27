import { useRef, useCallback, useEffect } from 'react'
import { getLineHeight, throttle } from '../../utils'

function onClamp(el, text, rows, character) {
    if (!el) {
        return
    }

    if (text.lenngth < 2) {
        return
    }

    const maxHeight = getLineHeight(el, text) * rows

    if (el.offsetHeight <= maxHeight) {
        return
    }

    const styles = el.style || {}
    const heightStyle = styles.height
    const maxHeightStyle = styles.maxHeight

    styles.height = 'auto'
    styles.maxHeight = 'none'

    const fillText = document.createElement('span')
    fillText.className = 'text-ellipsis'
    fillText.innerHTML = character

    let max = text.length - 1
    let min = 0
    let pivot

    // Binary search for number of words which can fit in allotted height
    while (min < max) {
        // 等价于 (min + max + 1) / 2 后再向下取整
        pivot = (min + max + 1) >> 1
        el.textContent = text.slice(0, pivot)
        el.insertAdjacentElement('beforeend', fillText)

        if (el.offsetHeight > maxHeight) {
            max = pivot - 1
        }
        else {
            min = pivot
        }
    }

    el.textContent = text.slice(0, max).replace(/\s+$/gm, '')
    // el.title = text
    el.insertAdjacentElement('beforeend', fillText)

    styles.height = heightStyle
    styles.maxHeight = maxHeightStyle
}

function useEllipsis(options) {
    const { text, rows = 1, character = '...' } = options
    const handleRef = useRef(null)
    
    const callbackRef = useCallback(
        (node) => {
            if (handleRef.current) {
                onClamp(handleRef.current, text, rows, character)
            }

            handleRef.current = node

            if (handleRef.current !== null) {
                onClamp(handleRef.current, text, rows, character)
            }
        },
        [text, rows, character]
    )

    useEffect(
        () => {
            const handleResize = throttle(() => {
                callbackRef(handleRef.current)
            }, 300)

            window.addEventListener('resize', handleResize)

            return () => {
                window.removeEventListener('resize', handleResize)
            }
        },
        [text, rows, character]
    )

    return callbackRef
}

export default useEllipsis
