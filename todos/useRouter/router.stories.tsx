import React from 'react';
import useRouter from './index';

export default {
    title: 'Hooks/useRouter',
}

// Usage
function Usage() {
    // Get the router object
    const router = useRouter();
    // Get value from query string (?postId=123) or route param (/:postId)
    console.log(router.query.postId);
    // Get current pathname
    console.log(router.pathname);
    // Navigate with router.push()
    return <button onClick={(e) => router.push("/about")}>About</button>;
}

Usage.storyName = 'useRouter'
