import React, { useContext } from 'react'

import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'

const Cart = props => {
    const cartCtx = useContext(CartContext)

    const cartItemRemove = id => {
        cartCtx.removeItem(id)
    }

    const cartItemAdd = item => {
        cartCtx.addItem({...item, amount: 1})
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

    return (
        <Modal onClose={props.onClose}>
            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart