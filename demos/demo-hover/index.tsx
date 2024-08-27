import React from 'react';
import { useHover } from '../../src';

// Usage
function App() {
    const [hoverRef, isHovered] = useHover();

    return (
        <div ref={hoverRef}>
            {isHovered ? "😁" : "☹️"}
        </div>
    )
}

export default App;