import React from 'react';
import useKeyPress from './index';

export default {
    title: 'dom-hooks/useKeyPress',
}

// Usage
export const Usage = () => {
    // Call our hook for each key that we'd like to monitor
    const happyPress = useKeyPress("h");
    const sadPress = useKeyPress("s");
    const robotPress = useKeyPress("r");
    const foxPress = useKeyPress("f");
    return (
        <div>
            <div>h, s, r, f</div>
            <div>
                {happyPress && "😊"}
                {sadPress && "😢"}
                {robotPress && "🤖"}
                {foxPress && "🦊"}
            </div>
        </div>
    );
}
Usage.storyName = 'useKeyPress'
