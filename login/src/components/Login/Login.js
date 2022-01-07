import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
    if(action.type === 'USER_INPUT') {
        return {value: action.value, isValid: action.value.includes('@')}
    }
    if(action.type === 'INPUT_BLUR'){
        return {value: state, isValid: state.value.includes('@')}
    }

    return {value: '', isValid: false}
}

const passwordReducer = (state, action) => {
    if(action.type === 'USER_INPUT') {
        return {value: action.value, isValid: action.value.trim().length > 6}
    }
    if(action.type === 'INPUT_BLUR'){
        return {value: state, isValid: state.value.trim().length > 6}
    }

    return {value: '', isValid: false}
}

const Login = (props) => {
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [emailIsValid, setEmailIsValid] = useState();
    // const [enteredPassword, setEnteredPassword] = useState('');
    // const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {value: '', isValid: null})
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value: '', isValid: null})

    // // Hook to execute an action in response to another action, this are called side effects
    // useEffect(() => {
    //     // Running this code only if any of the values
    //     // In the dependencies changesd
    //     const identifier = setTimeout(() => {
    //         console.log('Checking form validity!')
    //         setFormIsValid(
    //             emailState.isValid && enteredPassword.trim().length > 6
    //         )
    //     }, 500)
        
    //     // Cleanup process
    //     return () => {
    //         // Cleanup executes before the next effect execution
    //         console.log('Cleanup!')
    //         clearTimeout(identifier)
    //     }
    // }, [enteredEmail, enteredPassword])

    const emailChangeHandler = (event) => {
        // setEnteredEmail(event.target.value);
        dispatchEmail({type: 'USER_INPUT', value: event.target.value})
    };

    const passwordChangeHandler = (event) => {
        // setEnteredPassword(event.target.value);
        dispatchPassword({type: 'USER_INPUT', value: event.target.value})
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
        props.onLogin(emailState.value, passwordState.value);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''
                        }`}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={emailState.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''
                        }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={passwordState.value}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
