import { createSlice } from '@reduxjs/toolkit'

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
                    title: itemToAdd.title
                })
            } else {
                existingItem.quantity += itemToAdd.quantity
                existingItem.totalPrice = existingItem.totalPrice + itemToAdd.price
            }
            
            state.totalQuantity += itemToAdd.quantity
        },
        removeItem(state, action) {
            const id = action.payload
            const existingItem = state.cartItems.find(item => item.id === id)

            if(existingItem.quantity === 1) {
                state.cartItems = state.cartItems.filter(item => item.id !== id)
            } else {
                existingItem.quantity--
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }

            state.totalQuantity--
        },
    },
})

export const cartSliceActions = cartSlice.actions

export default cartSlice.reducer
