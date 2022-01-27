import React, { useReducer } from 'react'

import CartContext from './cart-context'

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD') {
        // Calculating the new total amount
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount

        // Checking if the item we want to add is already in the items array
        const existingIndex = state.items.findIndex(item => action.item.id === item.id)
        const existingCartItem = state.items[existingIndex]

        let updatedItems

        if(existingCartItem) {
            // We update the existing item's current amount
            const updatedCartItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }

            // Modifying the array with the new item and its new amount
            updatedItems = [...state.items]
            updatedItems[existingIndex] = updatedCartItem
        } else {
            // Generating a new array instead of editing the existing one with push
            updatedItems = state.items.concat(action.item)    
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    
    if(action.type === 'REMOVE') {
        // Checking if the item is already part of the items array
        const existingIndex = state.items.findIndex(item => action.id === item.id)
        const existingCartItem = state.items[existingIndex]
        
        const updatedTotalAmount = state.totalAmount - existingCartItem.price

        let updatedItems

        // Remove the entire item if it is the last one
        if(existingCartItem.amount === 1) {
            // Keeping only the items that are not the id we want to removw
            updatedItems = state.items.filter(item => action.id !== item.id)
        } else {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount - 1
            }
            updatedItems = [...state.items]
            updatedItems[existingIndex] = updatedItem
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if(action.type === 'CLEAR') {
        return defaultCartState
    }

    return defaultCartState
}

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)


    const addItemToCart = item => {
        dispatchCartAction({
            type: 'ADD',
            item
        })
    }

    const removeItemFromCart = id => {
        dispatchCartAction({
            type: 'REMOVE',
            id
        })
    }

    const clearCart = () => {
        dispatchCartAction({
            type: 'CLEAR'
        })
    }
    
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
        clearCart
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider