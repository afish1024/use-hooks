import { useState, useRef, useCallback } from 'react'

function useCallbackHover() {
    const [isHovering, setHovering] = useState(false);
    const prevRef = useRef();

    // wrap in useCallback so we can use in dependencies below
    const handleMouseOver = useCallback(() => setHovering(true), []);
    const handleMouseOut = useCallback(() => setHovering(false), []);

    const callbackRef = useCallback(
        (node) => {
            if (prevRef.current) {
                prevRef.current.addEventListener('mouseover', handleMouseOver);
                prevRef.current.addEventListener('mouseout', handleMouseOut);
            }

            prevRef.current = node;

            if (prevRef.current !== null) {
                prevRef.current.addEventListener('mouseover', handleMouseOver);
                prevRef.current.addEventListener('mouseout', handleMouseOut);
            }
        },
        []
    );

    return [callbackRef, isHovering];
}

export default useCallbackHover;
