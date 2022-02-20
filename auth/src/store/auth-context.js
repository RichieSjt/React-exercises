import React from 'react'
import { useState, useEffect, useCallback } from 'react'

let logoutTimer

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {}
})

const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime()
    const expiration = new Date(expirationTime).getTime()

    const remainingTime = expiration - currentTime

    return remainingTime
}

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token')
    const storedExpirationTime = localStorage.getItem('expirationTime')

    const remainingTime = calculateRemainingTime(storedExpirationTime)

    if(remainingTime <= 0) {
        localStorage.removeItem('token')
        localStorage.removeItem('expirationTime')
        return null
    }

    return {
        token: storedToken,
        remainingTime
    }
}

export const AuthContextProvider = props => {
    const tokenData = retrieveStoredToken()
    let initialToken
    if (tokenData) {
        initialToken = tokenData.token
    }

    const [token, setToken] = useState(initialToken)
    const userIsLoggedIn = !!token

    
    const logoutHandler = useCallback(() => {
        setToken(null)
        localStorage.removeItem('token')
        localStorage.removeItem('expirationTime')

        if(logoutTimer) clearTimeout(logoutTimer)
    }, [])
    
    const loginHandler = (token, expirationTime) => {
        setToken(token)
        localStorage.setItem('token', token)
        localStorage.setItem('expirationTime', expirationTime)

        const remainingTime = calculateRemainingTime(expirationTime)

        logoutTimer = setTimeout(logoutHandler, remainingTime)
    }

    useEffect(() => {
        if(tokenData) {
            console.log(tokenData)
            logoutTimer = setTimeout(logoutHandler, tokenData.remainingTime)
        }
    }, [tokenData, logoutHandler])

    const contextValue = {
        token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }
    
    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext