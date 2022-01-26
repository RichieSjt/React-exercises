import { useState } from 'react'

const useInput = (validate) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const isValid = validate(enteredValue)
    const hasError = !isValid && isTouched

    const valueChangeHandler = (e) => { 
        setEnteredValue(e.target.value) 
    }
    
    const inputBlurHandler = (e) => { 
        setIsTouched(true) 
    }

    const reset = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

    return {
        value: enteredValue,
        isValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }
}

export default useInput