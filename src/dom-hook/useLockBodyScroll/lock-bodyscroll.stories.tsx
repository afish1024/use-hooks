import { useState, useLayoutEffect } from "react";
import useLockBodyScroll from './index';

export default {
    title: 'dom-hooks/useLockBodyScroll',
}

function Modal({ title, content, onClose }) {
    // Call hook to lock body scroll
    useLockBodyScroll();
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal">
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    );
}

// Usage
export const Usage = () => {
    // State for our modal
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div>
            <button onClick={() => setModalOpen(true)}>Show Modal</button>
            {/* <Content /> */}
            {modalOpen && (
                <Modal
                    title="Try scrolling"
                    content="I bet you you can't! Muahahaha 😈"
                    onClose={() => setModalOpen(false)}
                />
            )}
        </div>
    );
}
Usage.storyName = 'useLockBodyScroll'
