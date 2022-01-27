import React, { useContext, useState } from 'react'

import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
import Checkout from './Checkout'
import useHttp from '../../hooks/use-http'
import FIREBASE from '../../utils/api-keys'

const Cart = props => {
    const [isCheckout, setIsCheckout] = useState(false);
    const cartCtx = useContext(CartContext)

    const {
        isLoading,
        error,
        isSubmitted,
        sendRequest: saveOrder
    } = useHttp()

    const cartItemRemove = id => {
        cartCtx.removeItem(id)
    }

    const cartItemAdd = item => {
        cartCtx.addItem({ ...item, amount: 1 })
    }

    const orderHandler = () => {
        setIsCheckout(true)
    }

    const submitOrderHandler = (userData) => {
        saveOrder({
            url: FIREBASE + 'orders.json',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                user: userData,
                orderedItems: cartCtx.items
            }
        }, () => console.log())
    }

    const cartItems = cartCtx.items.map(item =>
        <CartItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemove.bind(null, item.id)}
            onAdd={cartItemAdd.bind(null, item)}
        />
    )

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0

    const modalActions = (
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
        </div>
    )

    let cartModalContent = (
        <React.Fragment>
            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && <Checkout onCancel={props.onClose} onSubmit={submitOrderHandler} />}
            {!isCheckout && modalActions}
        </React.Fragment>
    )

    if (isLoading)
        cartModalContent = <p className={classes.info}>Placing order...</p>

    if (isSubmitted) {
        cartModalContent = (
            <React.Fragment>
                <p className={classes.info}>Successfully placed the order!</p>
                <div className={classes.actions}>
                    <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                </div>
            </React.Fragment>
        )
        cartCtx.clearCart()
    }

    if (error) 
        cartModalContent = <p className={classes.info}>Something went wrong! Try again later</p>

    return (
        <Modal onClose={props.onClose}>
            {cartModalContent}
        </Modal>
    )
}

export default Cart