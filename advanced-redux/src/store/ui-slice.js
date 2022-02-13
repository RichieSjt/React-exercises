import { createSlice } from '@reduxjs/toolkit'
import { fetchCartData, sendCartData } from './cart-actions'

const initialUIState = {
    cartIsShown: false,
    notification: null
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialUIState,
    reducers: {
        toggleCart(state) {
            state.cartIsShown = !state.cartIsShown
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            }
        }
    },
    extraReducers: {
        [fetchCartData.rejected]: (state, action) => {
            state.notification = {
                status: 'error',
                title: 'Error!',
                message: action.error.message || 'Fetch failed',
            }
        },
        [sendCartData.pending]: (state) => {
            state.notification = {
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data!',
            }
        },
        [sendCartData.fulfilled]: (state) => {
            state.notification = {
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data successfully!',
            }
        },
        [sendCartData.rejected]: (state) => {
            state.notification = {
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!',
            }
        }
    }
})

export const uiSliceActions = uiSlice.actions

export default uiSlice.reducer