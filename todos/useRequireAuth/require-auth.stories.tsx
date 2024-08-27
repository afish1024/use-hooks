import React from 'react';
import useRequireAuth from './index';

export default {
    title: 'Hooks/useRequireAuth',
}

const Loading = () => (
    <div>Loading</div>
)
const Dashboard = () => (
    <div>Dashboard</div>
)

// Usage
export function DashboardPage(props) {
    const auth = useRequireAuth();
    // If auth is null (still fetching data)
    // or false (logged out, above hook will redirect)
    // then show loading indicator.
    if (!auth) {
        return <Loading />;
    }
    return <Dashboard auth={auth} />;
}
DashboardPage.storyName = 'useRequireAuth'
