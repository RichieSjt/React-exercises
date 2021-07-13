import { useState } from 'react'

import './NewExpense.css'

import ExpenseForm from './ExpenseForm'

const NewEpense = (props) => {
    const [isShown, setIsShown] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData)
        
        // Hiding the form after submit
        setIsShown(false)
    }

    const hideForm = (event) => {
        setIsShown(false)
    }

    const showForm = (event) => {
        setIsShown(true)
    }

    return(
        <div className='new-expense'>
            {!isShown && <button onClick={showForm}>Add new expense</button>}
            {isShown && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideForm}/>}
        </div>
    )
}

export default NewEpense