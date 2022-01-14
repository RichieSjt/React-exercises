import React, { useState, useEffect } from 'react'

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email, password) => { }
})

export const AuthContextProvider = props => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        // We use an effect to prevent an infinite loop
        // it only runs once when the application starts
        const storageIsLoggedIn = localStorage.getItem('isLoggedIn')

        if (storageIsLoggedIn === '1')
            setIsLoggedIn(true)
    }, [])

    // Without useEffect, this code would generate an infinite loop
    // const storageIsLoggedIn = localStorage.getItem('isLoggedIn')

    //     if(storageIsLoggedIn === '1')
    //         setIsLoggedIn(true)

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false)
    }
    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1')
        setIsLoggedIn(true)
    }

    return (
        <AuthContext.Provider value={
            { isLoggedIn,
             onLogout: logoutHandler,
             onLogin: loginHandler}}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext