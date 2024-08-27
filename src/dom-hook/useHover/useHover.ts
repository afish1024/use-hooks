import { useState, useRef, useEffect } from 'react'

// Hook
function useHover() {
    const [isHovering, setHovering] = useState(false);
    const ref = useRef(null);

    const handleMouseOver = () => setHovering(true);
    const handleMouseOut = () => setHovering(false);

    useEffect(
        () => {
            const node = ref.current;

            if (node) {
                node.addEventListener('mouseover', handleMouseOver);
                node.addEventListener('mouseout', handleMouseOut);

                return () => {
                    node.removeEventListener('mouseover', handleMouseOver);
                    node.removeEventListener('mouseout', handleMouseOut);
                };
            }
        },
        [ref.current]   // Recall only if ref changes
    );

    return [ref, isHovering];
}

export default useHover
