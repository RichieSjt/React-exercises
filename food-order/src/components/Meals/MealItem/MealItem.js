import React, { useContext } from 'react'
import CartContext from '../../../store/cart-context'

import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'

const MealItem = props => {
    const cartCtx = useContext(CartContext)

    const addToCart = amount => {
        cartCtx.addItem({
            id: props.id,
            title: props.title,
            amount,
            price: props.price
        })
    }

    const price = `$${props.price.toFixed(2)}`
    
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.title}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>    
            </div>
            <div>
                <MealItemForm id={props.id} onAddToCart={addToCart}/>
            </div>
        </li>
    )
}

export default MealItem