import React from 'react';
import usePortal from './index';

// Usage
function App() {
    var { openPortal, closePortal, isOpen, Portal } = usePortal({
        bindTo: document.querySelector('#test')
    })
  
    // want to use array destructuring? You can do that too
    // var [openPortal, closePortal, isOpen, Portal] = usePortal()

    return (
        <>
        <button onClick={openPortal}>
        Open Portal
      </button>
      <div id="test"></div>
      {isOpen && (
        <Portal>
          <p>
            This Portal handles its own state.{' '}
            <button onClick={closePortal}>Close me!</button>, hit ESC or
            click outside of me.
          </p>
        </Portal>
      )}
      </>
    )
}

export default {
    title: 'Hooks/usePortal'
};

export const Default = () => (
    <div style={{ padding: '3em', width: 300 }}>
        <App />
    </div>
)
// Default.storyName = '重命名'

export const Wrapped = () => (
    <div style={{ padding: '3em', width: 250 }}>
        <App />
    </div>
)