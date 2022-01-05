import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card'
import './Expenses.css'

const Expenses = (props) => {
    const [year, setYear] = useState('2020')
    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === year)

    const yearChangedHandler = (year) => {
        setYear(year)
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onYearChanged={yearChangedHandler} year={year}/>
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default Expenses