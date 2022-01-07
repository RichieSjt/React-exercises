import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // We use an effect to prevent an infinite loop
        // it only runs once when the application starts
        const storageIsLoggedIn = localStorage.getItem('isLoggedIn')
        
        if(storageIsLoggedIn === '1')
            setIsLoggedIn(true)
    }, [])

    // Without useEffect, this code would generate an infinite loop
    // const storageIsLoggedIn = localStorage.getItem('isLoggedIn')
        
    //     if(storageIsLoggedIn === '1')
    //         setIsLoggedIn(true)


    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        setIsLoggedIn(true);

        localStorage.setItem('isLoggedIn', '1')
    };

    const logoutHandler = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn')
    };

    return (
        <React.Fragment>
            <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
            <main>
                {!isLoggedIn && <Login onLogin={loginHandler} />}
                {isLoggedIn && <Home onLogout={logoutHandler} />}
            </main>
        </React.Fragment>
    );
}

export default App;
