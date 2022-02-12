import { createSlice } from '@reduxjs/toolkit'

import { uiSliceActions } from './ui-slice'

const initialCartState = {
    cartItems: [],
    totalQuantity: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addItem(state, action) {
            const itemToAdd = action.payload

            const existingItem = state.cartItems.find(
                (item) => item.id === itemToAdd.id
            )

            if (!existingItem) {
                state.cartItems.push({
                    id: itemToAdd.id,
                    price: itemToAdd.price,
                    quantity: itemToAdd.quantity,
                    totalPrice: itemToAdd.price,
                    title: itemToAdd.title,
                })
            } else {
                existingItem.quantity += itemToAdd.quantity
                existingItem.totalPrice =
                    existingItem.totalPrice + itemToAdd.price
            }

            state.totalQuantity += itemToAdd.quantity
        },
        removeItem(state, action) {
            const id = action.payload
            const existingItem = state.cartItems.find((item) => item.id === id)

            if (existingItem.quantity === 1) {
                state.cartItems = state.cartItems.filter(
                    (item) => item.id !== id
                )
            } else {
                existingItem.quantity--
                existingItem.totalPrice =
                    existingItem.totalPrice - existingItem.price
            }

            state.totalQuantity--
        },
    },
})

// Creating our own custom action creator
export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiSliceActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data!',
            })
        )

        const sendRequest = async () => {
            const response = await fetch(
                'https://react-movie-db-a8b58-default-rtdb.firebaseio.com/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify(cart),
                }
            )

            if (!response.ok) {
                throw new Error('Sending cart data failed.')
            }
        }

        try {
            await sendRequest()
            
            dispatch(
                uiSliceActions.showNotification({
                    status: 'success',
                    title: 'Success!',
                    message: 'Sent cart data successfully!',
                })
            )
        } catch (error) {
            dispatch(
                uiSliceActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart data failed!',
                })
            )
        }
    }
}

export const cartSliceActions = cartSlice.actions

export default cartSlice.reducer
