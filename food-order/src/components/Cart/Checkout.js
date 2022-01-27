import React from 'react'

import classes from './Checkout.module.css'
import useInput from '../../hooks/use-input'

const Checkout = props => {
    const isNotEmpty = value => value.trim() !== ''
    const isFiveChars = value => value.trim().length === 5
    
    const {
        value: enteredName,
        isValid: nameIsValid,
        hasError: nameHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetName
    } = useInput(isNotEmpty)

    const {
        value: enteredStreet,
        isValid: streetIsValid,
        hasError: streetHasError,
        valueChangeHandler: streetChangeHandler,
        inputBlurHandler: streetBlurHandler,
        reset: resetStreet
    } = useInput(isNotEmpty)

    const {
        value: enteredPostalCode,
        isValid: postalCodeIsValid,
        hasError: postalCodeHasError,
        valueChangeHandler: postalCodeChangeHandler,
        inputBlurHandler: postalCodeBlurHandler,
        reset: resetPostalCode
    } = useInput(isFiveChars)

    const {
        value: enteredCity,
        isValid: cityIsValid,
        hasError: cityHasError,
        valueChangeHandler: cityChangeHandler,
        inputBlurHandler: cityBlurHandler,
        reset: resetCity
    } = useInput(isNotEmpty)

    let formIsValid = false

    if(nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid) 
        formIsValid = true

    const submitHandler = e => {
        e.preventDefault()

        if(!formIsValid) return

        // POST to backend
        // console.log(enteredName, enteredStreet, enteredPostalCode, enteredCity)
        props.onSubmit({
            name: enteredName,
            street: enteredStreet,
            postalCode: enteredPostalCode,
            city: enteredCity
        })

        resetName()
        resetStreet()
        resetPostalCode()
        resetCity()
    }

    const nameClasses = `${classes.control} ${nameHasError ? classes.invalid : ''}`
    const streetClasses = `${classes.control} ${streetHasError ? classes.invalid : ''}`
    const postalCodeClasses = `${classes.control} ${postalCodeHasError ? classes.invalid : ''}`
    const cityClasses = `${classes.control} ${cityHasError ? classes.invalid : ''}`

    return (
        <form onSubmit={submitHandler}>
            <div className={nameClasses}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' value={enteredName} onChange={nameChangeHandler} onBlur={nameBlurHandler}/>
                {nameHasError && <p>Name must not be empty</p>}
            </div>
            <div className={streetClasses}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' value={enteredStreet} onChange={streetChangeHandler} onBlur={streetBlurHandler}/>
                {streetHasError && <p>Street must not be empty</p>}
            </div>
            <div className={postalCodeClasses}>
                <label htmlFor='postal'>Postal code</label>
                <input type='text' id='postal' value={enteredPostalCode} onChange={postalCodeChangeHandler} onBlur={postalCodeBlurHandler}/>
                {postalCodeHasError && <p>Postal code must have 5 digits</p>}
            </div>
            <div className={cityClasses}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' value={enteredCity} onChange={cityChangeHandler} onBlur={cityBlurHandler}/>
                {cityHasError && <p>City must not be empty</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button disabled={!formIsValid} className={classes.submit}>Confirm</button>
            </div>
        </form>
    )
}

export default Checkout