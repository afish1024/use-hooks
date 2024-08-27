import { useState, useEffect } from 'react';
import useMemoCompare from './index';

export default {
    title: 'Hooks/useMemoCompare',
}

// Usage
const App = ({ obj }) => {
    const [state, setState] = useState();
    // Use the previous obj value if the "id" property hasn't changed
    const objFinal = useMemoCompare(obj, (prev, next) => {
        return prev && prev.id === next.id;
    });

    // Here we want to fire off an effect if objFinal changes.
    // If we had used obj directly without the above hook and obj was technically a
    // new object on every render then the effect would fire on every render.
    // Worse yet, if our effect triggered a state change it could cause an endless loop
    // where effect runs -> state change causes rerender -> effect runs -> etc ...
    useEffect(() => {
        // Call a method on the object and set results to state
        return objFinal.someMethod().then((value) => setState(value));
    }, [objFinal]);

    // So why not pass [obj.id] as the dependency array instead?
    useEffect(() => {
        // Then eslint-plugin-hooks would rightfully complain that obj is not in the
        // dependency array and we'd have to use eslint-disable-next-line to work around that.
        // It's much cleaner to just get the old object reference with our custom hook.
        return obj.someMethod().then((value) => setState(value));
    }, [obj.id]);
    
    return <div> ... </div>;
}

export const Usage = () => {
    const obj = {
        id: '==id==',
        value: 1,
        someMethod() {
            return new Promise((resolve, reject) => {
                resolve(2)
            })
        }
    }
    return (
        <App obj={obj} />
    )
}
Usage.storyName = 'useMemoCompare'
