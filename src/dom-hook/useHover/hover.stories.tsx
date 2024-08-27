import React from 'react';
import useHover from './index';

export default {
    title: 'dom-hooks/useHover',
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

// Usage
export const Usage = () => {
    const [hoverRef, isHovered] = useHover();

    return (
        <div ref={hoverRef}>
            鼠标移入：{isHovered ? "😁" : "☹️"}
        </div>
    )
}
Usage.storyName = 'useHover'
