import React, { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')

    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount: '',
    //     date: ''
    // })

    const titleChangedHandler = (event) => {
        setTitle(event.target.value)

        // When we depend on the value of the previous state we should call a function inside Set
        // setUserInput((prevState) => {
        //     return { ...prevState, title: event.target.value }
        // })
    }

    const amountChangedHandler = (event) => {
        setAmount(event.target.value)

        // setUserInput((prevState) => {
        //     return { ...prevState, amount: event.target.value }
        // })
    }

    const dateChangedHandler = (event) => {
        setDate(event.target.value)

        // setUserInput((prevState) => {
        //     return { ...prevState, date: event.target.value }
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault()

        // console.log(userInput)
        const userInput = {
            title,
            amount: +amount,
            date: new Date(date)
        }

        props.onFormSubmit(userInput)

        setTitle('')
        setAmount('')
        setDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangedHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={amount} min="0.01" step="0.01" onChange={amountChangedHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={date} min="2019-01-01" max="2022-12-31" onChange={dateChangedHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={props.onHideForm}>Cancel</button>
                <button type="submit">Add expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm