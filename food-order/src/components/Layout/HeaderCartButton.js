import React, { useContext, useEffect, useState } from 'react'
import classes from './HeaderCartButton.module.css'

import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'

const HeaderCartButton = props => {
    const [btnIsAnimated, setBtnIsAnimated] = useState(false)

    const cartCtx = useContext(CartContext)
    // curNum is an accumulator in the reduce function, we iterate and add each of the item's amount to curNum
    const numberOfCartItems = cartCtx.items.reduce((curNum, item) => curNum + item.amount, 0)

    const btnClasses = `${classes.button} ${btnIsAnimated && classes.bump}`

    useEffect(() => {
        if(cartCtx.items.length === 0)
            return

        setBtnIsAnimated(true)

        // Removing class after animation ends
        const timer = setTimeout(() => setBtnIsAnimated(false), 300)

        // Cleanup function, executed before the next effect
        return () => {
            clearTimeout(timer)
        }
    }, [cartCtx.items])

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton