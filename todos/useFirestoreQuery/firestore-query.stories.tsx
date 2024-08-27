import React from 'react';
import useFirestoreQuery from './index';

export default {
    title: 'Hooks/useFirestoreQuery',
}

const firestore = {
    collection(name) {
        return this
    },
    doc(...args) {
        return [...args]
    }
}
const ProfileHeader = ({ avatar, name }) => {
    return (
        <div>ProfileHeader { avatar } { name }</div>
    )
}
const Posts = ({ posts }) => {
    return (
        <div>Posts { posts }</div>
    )
}
// Usage
function ProfilePage({ uid }) {
    // Subscribe to Firestore document
    const { data, status, error } = useFirestoreQuery(
        firestore.collection("profiles").doc(uid)
    );
    if (status === "loading") {
        return "Loading...";
    }
    if (status === "error") {
        return `Error: ${error.message}`;
    }
    return (
        <div>
            <ProfileHeader avatar={data.avatar} name={data.name} />
            <Posts posts={data.posts} />
        </div>
    );
}

export const Usage = () => {
    return (
        <ProfilePage uid="123" />
    )
}
Usage.storyName = 'useFirestoreQuery-异常'
