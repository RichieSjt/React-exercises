import { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'
import Notification from './components/UI/Notification'
import { sendCartData } from './store/cart-slice'

let isInitial = true

function App() {
    const dispatch = useDispatch()
    const notification = useSelector((state) => state.ui.notification)
    const cartIsShown = useSelector((state) => state.ui.cartIsShown)
    const cart = useSelector((state) => state.cart.cartItems)

    useEffect(() => {
        if (isInitial) {
            isInitial = false
            return
        }

        // We are sending an action creator which returns a function
        dispatch(sendCartData(cart))
    }, [cart, dispatch])

    return (
        <Fragment>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
            <Layout>
                {cartIsShown && <Cart />}
                <Products />
            </Layout>
        </Fragment>
    )
}

export default App
