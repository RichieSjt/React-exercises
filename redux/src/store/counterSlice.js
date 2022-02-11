import { createSlice } from '@reduxjs/toolkit'

const initialCounterState = { counter: 0, counterIsShown: true }

// Redux toolkit approach
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        // Every method will receive the latest state
        increment(state, action) {
            // State mutation is allowed in redux toolkit
            // state.counter++ for example would be allowed

            // payload is the default name for data sent in the action
            state.counter = state.counter + action.payload
        },
        decrement(state, action) {
            state.counter = state.counter - action.payload
        },
        toggleCounter(state) {
            state.counterIsShown = !state.counterIsShown
        },
    },
})

// Actions are generated by slice
export const counterActions = counterSlice.actions

export default counterSlice.reducer


// const counterReducer = (state = initialState, action) => {
//     // NEVER mutate state in redux, instead overwrite it by returning a new state object
//     switch (action.type) {
//         case 'increment':
//             return {
//                 counter: state.counter + action.amount,
//                 counterIsShown: state.counterIsShown,
//             }
//         case 'decrement':
//             return {
//                 counter: state.counter - action.amount,
//                 counterIsShown: state.counterIsShown,
//             }
//         case 'toggle':
//             return {
//                 counter: state.counter,
//                 counterIsShown: !state.counterIsShown
//             }
//         default:
//             return state
//     }

// }