import React from 'react';
import useAuth, { ProvideAuth } from './index';

// Top level App component
function App(props) {
    return (
        <ProvideAuth>
            {/*
        Route components here, depending on how your app is structured.
        If using Next.js this would be /pages/_app.js
      */}
        </ProvideAuth>
    );
}

// Any component that wants auth state
function Navbar(props) {
    // Get auth state and re-render anytime it changes
    const auth = useAuth();
    
    return (
        // <NavbarContainer>
        //     <Logo />
        //     <Menu>
        //         <Link to="/about">About</Link>
        //         <Link to="/contact">Contact</Link>
        //         {auth.user ? (
        //             <Fragment>
        //                 <Link to="/account">Account ({auth.user.email})</Link>
        //                 <Button onClick={() => auth.signout()}>Signout</Button>
        //             </Fragment>
        //         ) : (
        //             <Link to="/signin">Signin</Link>
        //         )}
        //     </Menu>
        // </NavbarContainer>
        <>异常</>
    );
}

Navbar.storyName = 'useAuth'

export default {
    title: 'Hooks/useAuth',
}