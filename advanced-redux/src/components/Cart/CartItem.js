import classes from './CartItem.module.css'

import { useDispatch } from 'react-redux'
import { cartSliceActions } from '../../store/cart-slice'

const CartItem = (props) => {
    const { id, title, quantity, total, price } = props.item

    const dispatch = useDispatch()

    const removeItemHandler = () => {
        dispatch(cartSliceActions.removeItem(id))
    }

    const addItemHandler = () => {
        const item = {
            id,
            title,
            price,
            quantity: 1
        }
        dispatch(cartSliceActions.addItem(item))
    }

    return (
        <li className={classes.item}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    ${total.toFixed(2)}{' '}
                    <span className={classes.itemprice}>
                        (${price.toFixed(2)}/item)
                    </span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={removeItemHandler}>-</button>
                    <button onClick={addItemHandler}>+</button>
                </div>
            </div>
        </li>
    )
}

export default CartItem
