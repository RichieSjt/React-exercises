import { useState } from 'react'

import Card from '../UI/Card'
import ExpensesFilter from '../ExpenseFilter/ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

import './Expenses.css'

const Expenses = (props) => {
    const [yearFilter, setYearFilter] = useState('2020')

    const saveSelectedDateHandler = (year) => {
        setYearFilter(year)
    }

    // Filtering expenses received by year
    const filteredExpenses = props.items.filter(item => item.date.getFullYear().toString() === yearFilter)

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={yearFilter} onDateSelected={saveSelectedDateHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses