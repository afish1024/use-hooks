import { useLayoutEffect } from "react";
// import "./styles.scss"; 
import useTheme from './index';

export default {
    title: 'dom-hooks/useTheme',
}

const theme = {
    "button-padding": "16px",
    "button-font-size": "14px",
    "button-border-radius": "4px",
    "button-border": "none",
    "button-color": "#FFF",
    "button-background": "#6772e5",
    "button-hover-border": "none",
    "button-hover-color": "#FFF",
};

// Usage
export const Usage = () => {
    useTheme(theme);
    return (
        <div>
            <button className="button">Button</button>
        </div>
    );
}
Usage.storyName = 'useTheme'
