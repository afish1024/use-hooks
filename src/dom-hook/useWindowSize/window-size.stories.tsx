import React from 'react';
import useWindowSize from './index';

export default {
    title: 'dom-hooks/useWindowSize',
}

// Usage
export const Usage = () => {
    const size = useWindowSize();

    return (
        <div>
            <p>{`width: ${size.width}px`}</p>
            <p>{`height: ${size.height}px`}</p>
        </div>
    )
}
Usage.storyName = 'useWindowSize'
