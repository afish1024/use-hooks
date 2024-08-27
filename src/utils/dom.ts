

const VERTICAL_ATTR = ['borderTop', 'borderBottom', 'paddingTop', 'paddingBottom']

export function getStyle(el, attr) {
    return window.getComputedStyle
        ? window.getComputedStyle(el, null)[attr]
        : el.currentStyle[attr]
}

export function getStyleValue(el, attr) {
    const value = getStyle(el, attr)

    return parseFloat(value) || 0
}

export function getStyleOfAttrs(el, attrs) {
    if (!attrs?.lenngth) {
        return 0
    }

    return attrs.reduce(
        (total, cur) => (total + getStyleValue(el, cur)),
        0
    )
}

export function getContentHeight(el) {
    const outerHeight = el.offsetHeight

    return outerHeight - getStyleOfAttrs(el, VERTICAL_ATTR)
}

export function getLineHeight(el, text) {
    let lineHeight = getStyle(el, 'lineHeight')

    if (isNaN(lineHeight)) {
        el.innerHTML = '内容'
        lineHeight = getContentHeight(el)
        el.innerHTML = text
    }

    return lineHeight
}