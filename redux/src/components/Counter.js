import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../store/counterSlice'

import classes from './Counter.module.css'

const Counter = () => {
    // Setting a subscription to the redux store
    const counter = useSelector((state) => state.counter.counter)
    const counterIsShown = useSelector((state) => state.counter.counterIsShown)

    // useDispatch returns a function
    const dispatch = useDispatch()

    const incrementHandler = () => {
        // Dispatching an action with the previously obtained function
        dispatch(counterActions.increment(1))
    }
    const increaseBy5Handler = () => {
        dispatch(counterActions.increment(5))
    }
    const decrementHandler = () => {
        dispatch(counterActions.decrement(1))
    }

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter())
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
