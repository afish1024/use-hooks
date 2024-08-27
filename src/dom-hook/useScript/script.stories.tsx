import React from 'react';
import useScript from './index';

// Usage
export const Usage = () => {
    const status = useScript("https://pm28k14qlj.codesandbox.io/test-external-script.js");

    return (
        <div>
            <div>
                Script status: <b>{status}</b>
            </div>
            {status === "ready" && (
                <div>
                    Script function call response: <b>{TEST_SCRIPT.start()}</b>
                </div>
            )}
        </div>
    )
}
Usage.storyName = 'useScript'

export default {
    title: 'dom-hooks/useScript',
}