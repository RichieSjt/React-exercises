import React, { useRef, useState } from 'react'
import classes from './MealItemForm.module.css'

import Input from '../../UI/Input'

const MealItemForm = props => {
    const amountInputRef = useRef()
    const [amountIsValid, setamountIsValid] = useState(true)

    const submitHandler = e => {
        e.preventDefault()
        
        const enteredAmount = amountInputRef.current.value
        const enteredAmountInt = +enteredAmount

        if(enteredAmount.trim().length === 0 || enteredAmountInt < 1 || enteredAmountInt > 5) {
            setamountIsValid(false)
            return
        }

        props.onAddToCart(enteredAmountInt)
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input label="Amount" 
                ref={amountInputRef}
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }} 
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
        </form>
    )
}

export default MealItemForm