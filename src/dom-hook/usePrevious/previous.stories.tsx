import React, { useState } from 'react';
import usePrevious from './index';

// Usage
export const Usage = () => {
    // State value and setter for our example
    const [count, setCount] = useState(0);
    // Get the previous value (was passed into hook on last render)
    const prevCount = usePrevious(count);
    // Display both current and previous count value
    return (
        <div>
            <h1>
                Now: {count}, before: {prevCount}
            </h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}
Usage.storyName = 'usePrevious'

export default {
    title: 'dom-hooks/usePrevious',
}