import React from 'react';
import useDarkMode from './index';

export default {
    title: 'Hooks/useDarkMode',
}

const Toggle = ({ darkMode, setDarkMode }) => {
    const handleChange = (evt) => {
        setDarkMode(evt.checked)
    }
    return (
        <div>
            <input type="checkbox" checked={!!darkMode} onChange={handleChange} />
        </div>
    )
}
const Content = () => {
    return (
        <div>内容</div>
    )
}

// Usage
export const Usage = () => {
    const [darkMode, setDarkMode] = useDarkMode();
    return (
        <div>
            <div className="navbar">
                <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
            <Content />
        </div>
    );
}
Usage.storyName = 'useDarkMode'
