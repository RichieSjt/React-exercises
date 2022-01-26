import useInput from "../hooks/use-input"

const BasicForm = (props) => {
    const isNotEmpty = value => value.trim() !== ''
    const isEmail = value => value.trim().includes('@')

    const {
        value: enteredName,
        isValid: nameIsValid,
        hasError: nameHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: nameReset
    } = useInput(isNotEmpty)

    const {
        value: enteredLastName,
        isValid: lastNameIsValid,
        hasError: lastNameHasError,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: lastNameReset
    } = useInput(isNotEmpty)
    
    const {
        value: enteredEmail,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: emailReset
    } = useInput(isEmail)

    let formIsValid = false
    
    if(nameIsValid && lastNameIsValid && emailIsValid)
        formIsValid = true

    const formSubmitHandler = e => {
        e.preventDefault()

        if(!formIsValid)
            return

        console.log(enteredName, enteredLastName, enteredEmail)

        nameReset() 
        lastNameReset()
        emailReset()
    }

    const nameClasses = nameHasError ? 'form-control invalid' : 'form-control'
    const lastNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control'
    const emailClasses = emailHasError ? 'form-control invalid' : 'form-control'

    return (
        <form onSubmit={formSubmitHandler}>
            <div className='control-group'>
                <div className={nameClasses}>
                    <label htmlFor='name'>First Name</label>
                    <input type='text' id='name' value={enteredName} onChange={nameChangeHandler} onBlur={nameBlurHandler}/>
                    {nameHasError && <p className='error-text'>Name must not be empty</p>}
                </div>
                <div className={lastNameClasses}>
                    <label htmlFor='name'>Last Name</label>
                    <input type='text' id='name' value={enteredLastName} onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler}/>
                    {lastNameHasError && <p className='error-text'>Last name must not be empty</p>}
                </div>
            </div>
            <div className={emailClasses}>
                <label htmlFor='name'>E-Mail Address</label>
                <input type='text' id='name' value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
                {emailHasError && <p className='error-text'>Please enter a valid email</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    )
}

export default BasicForm
