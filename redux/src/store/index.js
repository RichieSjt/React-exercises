import { configureStore } from '@reduxjs/toolkit'

import counterSlice from './counterSlice'
import authSlice from './authSlice'

// Configure store makes multiple reducers merging easier
const store = configureStore({
    reducer: { 
        counter: counterSlice,
        auth: authSlice
    }
})
// const store = createStore(counterReducer)

export default store
