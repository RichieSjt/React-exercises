import React, { useState } from 'react'

import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
    const [isShown, setIsShown] = useState(false)

    const showForm = () => { setIsShown(true) }
    const hideForm = () => { setIsShown(false) }

    const formSubmitHandler = (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData)
        setIsShown(false)
    }

    return (
        <div className="new-expense">
            {!isShown && <button onClick={showForm}>Add new expense</button>}
            {isShown && <ExpenseForm onFormSubmit={formSubmitHandler} onHideForm={hideForm} />}
        </div>
    )
}

export default NewExpense