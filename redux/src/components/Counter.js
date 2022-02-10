import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import classes from './Counter.module.css'

const Counter = () => {
    // Setting a subscription to the redux store
    const counter = useSelector((state) => state.counter)
    const counterIsShown = useSelector((state) => state.counterIsShown)

    // useDispatch returns a function
    const dispatch = useDispatch()

    const incrementHandler = () => {
        // Dispatching an action with the previously obtained function
        dispatch( { type: 'increment', amount: 1 } )
    }
    const increaseBy5Handler = () => {
        // Dispatching an action with the previously obtained function
        dispatch( { type: 'increment', amount: 5 } )
    }
    const decrementHandler = () => {
        // Dispatching an action with the previously obtained function
        dispatch( { type: 'decrement', amount: 1} )
    }

    const toggleCounterHandler = () => {
        dispatch( {type: 'toggle' })
    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {counterIsShown && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseBy5Handler}>Increase by 5</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    )
}

export default Counter
