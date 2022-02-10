import React from 'react'
import { createStore } from 'redux'

const initialState = { counter: 0, counterIsShown: true }

const counterReducer = (state = initialState, action) => {
    // NEVER mutate state in redux, instead overwrite it by returning a new state object
    switch (action.type) {
        case 'increment':
            return {
                counter: state.counter + action.amount,
                counterIsShown: state.counterIsShown,
            }
        case 'decrement':
            return {
                counter: state.counter - action.amount,
                counterIsShown: state.counterIsShown,
            }
        case 'toggle':
            return {
                counter: state.counter,
                counterIsShown: !state.counterIsShown
            }
        default:
            return state
    }

}

const store = createStore(counterReducer)

export default store