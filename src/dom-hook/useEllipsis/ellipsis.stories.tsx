import React from 'react';
import useEllipsis from './index';

export default {
    title: 'dom-hooks/useEllipsis',
    argTypes: {
        backgroundColor: {
            control: 'color'
        }
    },
    parameters: {
        docs: {
            page: null,
        }
    }
}

const text1 = `
    路的变迁，是西藏沧桑巨变的一个缩影。习近平同志1998年进藏时，从拉萨贡嘎机场到林芝八一镇乘车走了整整一天。如今，川藏铁路全线开工、拉林段建成投运，“复兴号”飞驰。拉萨到林芝乘动车只需3个多小时，走高速只要4个多小时。
    今天的西藏，县县通油路，乡乡通公路。日喀则市江孜县索盖村，每到秋天万亩青稞遍地金黄，但狭窄又坑洼不平的乡村路挡住了致富路。上海援藏工作队精心打造索盖村的宜居环境，索盖村很快成了游客喜爱的打卡地。     
`
const text2 = `
    CSS property values may be accessed using the getPropertyValue(propName) API or by indexing directly into the object such as obj['z-index'] or obj.zIndex.
    The values returned by getComputedStyle are resolved values. These are usually the same as CSS 2.1's computed values, but for some older properties like width, height, or padding, they are instead the same as used values. Originally, CSS 2.0 defined the computed values as the "ready to be used" final values of properties after cascading and inheritance, but CSS 2.1 redefined them as pre-layout, and used values as post-layout. For CSS 2.0 properties, getComputedStyle returns the old meaning of computed values, now called used values. An example difference between pre- and post-layout values includes the resolution of percentages for width or height, as those will be replaced by their pixel equivalent only for used values.         
`
const text3 = `
CSS property 路的变迁，是西藏沧桑巨变的一个缩影 values may be accessed 近平同志1998年进藏时，从拉萨贡嘎机场到林芝八一镇乘车走了整整一天。using the getPropertyValue(propName) API or by indexing directly
`

// Usage
export const Usage = () => {

    return (
        <div style={{ width: '50%', margin: '120px auto', padding: '20px', border: '1px solid #ddd'}}>
            <div ref={ useEllipsis({ text: text1, rows: 2 }) }></div>
            <hr />
            <div ref={ useEllipsis({ text: text2, rows: 2 }) }></div>
            <hr />
            <div ref={ useEllipsis({ text: text3, rows: 2 }) }></div>
            <hr />
            <div ref={ useEllipsis({ text: text1, rows: 2, character: '...<a href="/">更多</a>' }) }></div>
            <hr />
            <div ref={ useEllipsis({ text: text2, rows: 2, character: '<span style="margin-left: 5px; color: #333;">...<a href="/" style="margin-left: 2px; font-size: 12px; font-familay: fangsong; color: #333;">custom-style</a></span>' }) }></div>
            <hr />
            <div ref={ useEllipsis({ text: text3, rows: 2, character: '...<a href="/">More</a>' }) }></div>
        </div>
    )
}
Usage.storyName = 'useEllipsis'
