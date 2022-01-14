import React, { useState, useEffect, useReducer, useContext, useRef } from 'react'

import Card from '../UI/Card/Card'
import classes from './Login.module.css'
import Button from '../UI/Button/Button'
import AuthContext from '../../context/auth-context'
import Input from '../UI/Input/Input'

const emailReducer = (state, action) => {
    if(action.type === 'USER_INPUT') {
        return {value: action.value, isValid: action.value.includes('@')}
    }
    if(action.type === 'INPUT_BLUR'){
        return {value: state.value, isValid: state.value.includes('@')}
    }

    return {value: '', isValid: false}
}

const passwordReducer = (state, action) => {
    if(action.type === 'USER_INPUT') {
        return {value: action.value, isValid: action.value.trim().length > 6}
    }
    if(action.type === 'INPUT_BLUR'){
        return {value: state.value, isValid: state.value.trim().length > 6}
    }

    return {value: '', isValid: false}
}

const Login = (props) => {
    const authCtx = useContext(AuthContext)
    const emailRef = useRef()
    const passwordRef = useRef()

    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [emailIsValid, setEmailIsValid] = useState();
    // const [enteredPassword, setEnteredPassword] = useState('');
    // const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    // We use reducer to manage states which depend on other states
    const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null})
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: null})

    // Object destructuring aliases
    const { isValid: emailIsValid } = emailState
    const { isValid: passwordIsValid } = passwordState


    // Hook to execute an action in response to another action, this are called side effects
    useEffect(() => {
        // Waiting half second before running this code only if any of the values
        // In the dependencies changed
        const identifier = setTimeout(() => {
            console.log('Checking form validity!')
            setFormIsValid(
                emailIsValid && passwordIsValid
            )
        }, 500)
        
        // Cleanup process
        return () => {
            // Cleanup executes before the next effect execution
            console.log('Cleanup!')
            // Reseting the timer if the user typed anything before the half second passed
            // in order to avoid running form validation on every effect
            clearTimeout(identifier)
        }
    }, [emailIsValid, passwordIsValid])

    const emailChangeHandler = (event) => {
        // setEnteredEmail(event.target.value);
        // dispatchEmail will trigger the email reducer function
        dispatchEmail({type: 'USER_INPUT', value: event.target.value})

        // setFormIsValid(passwordState.isValid && event.target.value.includes('@'))
    };

    const passwordChangeHandler = (event) => {
        // setEnteredPassword(event.target.value);
        dispatchPassword({type: 'USER_INPUT', value: event.target.value})
        
        // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6)
    };

    const validateEmailHandler = () => {
        // setEmailIsValid(emailState.isValid);
        dispatchEmail({type: 'INPUT_BLUR'})
    };

    const validatePasswordHandler = () => {
        // setPasswordIsValid(enteredPassword.trim().length > 6);
        dispatchPassword({type: 'INPUT_BLUR'})
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if(formIsValid)
            authCtx.onLogin(emailState.value, passwordState.value);
        else if(!emailIsValid) {
            emailRef.current.focus()
        } else {
            passwordRef.current.focus()
        }
    
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input 
                    ref={emailRef}
                    id="email" 
                    label="E-Mail" 
                    type="email" 
                    isValid={emailIsValid} 
                    value={emailState.value} 
                    onChange={emailChangeHandler} 
                    onBlur={validateEmailHandler}
                />
                <Input 
                    ref={passwordRef}
                    id="password"
                    label="Password" 
                    type="password" 
                    isValid={passwordState.isValid} 
                    value={passwordState.value} 
                    onChange={passwordChangeHandler} 
                    onBlur={validatePasswordHandler}
                />
                
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
