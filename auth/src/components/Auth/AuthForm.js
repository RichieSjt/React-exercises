import { useState, useRef, useContext } from 'react'
import AuthContext from '../../store/auth-context'
import { useHistory } from 'react-router-dom'

import classes from './AuthForm.module.css'

const AuthForm = () => {
    const authCtx = useContext(AuthContext)
    const history = useHistory()

    const emailInputRef = useRef()
    const passwordInputRef = useRef()

    const [isLogin, setIsLogin] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState)
    }

    const submitHandler = async (e) => {
        e.preventDefault()

        const enteredEmail = emailInputRef.current.value
        const enteredPassword = passwordInputRef.current.value

        // Validation

        setIsLoading(true)

        let url

        if (isLogin) {
            // Login mode
            url ='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDD9yjQ8Gn70Vzorc4233n2FEOFQ2KAf-8'
        } else {
            // Sign up mode
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDD9yjQ8Gn70Vzorc4233n2FEOFQ2KAf-8'
        }

        const config = {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }

        const res = await fetch(url, config)
        // console.log(data)
        setIsLoading(false)
        
        try {
            const data = await res.json()
            if (res.ok){
                // console.log(data)
                // Using the expiration time we got from the response
                const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000))
                authCtx.login(data.idToken, expirationTime.toISOString())
                // Redirect the user
                history.replace('/')
            } else {
                throw new Error(data.error.message || 'Authentication failed!')
            }
        } catch (error) {
            alert(error.message)
        }
        
    }

    return (
        <section className={classes.auth}>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input
                        ref={emailInputRef}
                        type='email'
                        id='email'
                        required
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input
                        ref={passwordInputRef}
                        type='password'
                        id='password'
                        required
                    />
                </div>
                <div className={classes.actions}>
                    {!isLoading && (
                        <button>{isLogin ? 'Login' : 'Create Account'}</button>
                    )}
                    {isLoading && <p>Sending request</p>}
                    <button
                        type='button'
                        className={classes.toggle}
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin
                            ? 'Create new account'
                            : 'Login with existing account'}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default AuthForm
