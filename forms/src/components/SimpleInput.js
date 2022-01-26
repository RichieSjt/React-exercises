import { React } from 'react'

import useInput from '../hooks/use-input'

const SimpleInput = (props) => {
    const {
        value: enteredName,
        isValid: nameIsValid, 
        hasError: nameHasError, 
        valueChangeHandler: nameChangeHandler, 
        inputBlurHandler: nameBlurHandler,
        reset: nameReset
    } = useInput(value => value.trim() !== '')

    const {
        value: enteredEmail,
        isValid: emailIsValid, 
        hasError: emailHasError, 
        valueChangeHandler: emailChangeHandler, 
        inputBlurHandler: emailBlurHandler,
        reset: emailReset
    } = useInput(value => value.trim().includes('@'))

    let formIsValid = false

    if (nameIsValid && emailIsValid) formIsValid = true

    const formSubmitHandler = (e) => {
        e.preventDefault()

        if(!nameIsValid || !emailIsValid) { return }

        console.log(enteredName)        
        console.log(enteredEmail)
        
        emailReset()
        nameReset()
    }

    const nameInputClasses = nameHasError ? 'form-control invalid' : 'form-control'
    const emailInputClasses = emailHasError ? 'form-control invalid' : 'form-control'

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input value={enteredName} type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler}/>
                {nameHasError && <p className='error-text'>Name must not be empty</p>}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email'>Email</label>
                <input value={enteredEmail} type='email' id='email' onChange={emailChangeHandler} onBlur={emailBlurHandler}/>
                {emailHasError && <p className='error-text'>Please enter a valid email</p>}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    )
}

export default SimpleInput
