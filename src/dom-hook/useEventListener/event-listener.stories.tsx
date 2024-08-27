import React, { useState, useCallback } from 'react';
import useEventListener from './index';

export default {
    title: 'dom-hooks/useEventListener',
}

// 获取鼠标位置
function useCoords({ x = 0, y = 0}) {
    // State for storing mouse coordinates
    const [coords, setCoords] = useState({x, y});

    // Event handler utilizing useCallback ...
    // ... so that reference never changes.
    const handler = useCallback(
        ({ clientX, clientY }) => {
            // Update coordinates
            setCoords({ x: clientX, y: clientY });
        },
        [setCoords]
    );

    // Add event listener using our hook
    useEventListener("mousemove", handler);

    return coords;
}

// Usage
export const Usage = () => {
    const coords = useCoords({ x: 0, y: 0 });
    
    return (
        <h1>
            The mouse position is ({ JSON.stringify(coords) })
        </h1>
    );
}
Usage.storyName = 'useEventListener'
