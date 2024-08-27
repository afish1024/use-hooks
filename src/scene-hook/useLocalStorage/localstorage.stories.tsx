import React from 'react';
import useLocalStorage from './index';

export default {
    title: 'Hooks/useLocalStorage',
}

// Usage
export const Usage = () => {
    const [name, setName] = useLocalStorage('name', 'Blob');

    return (
        <div>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <div>值：{ name }</div>
        </div>
    )
}
Usage.storyName = 'useLocalStorage'
