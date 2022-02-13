import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchCartData = createAsyncThunk(
    'cart/fetchData',
    async () => {
        const res = await fetch('https://react-movie-db-a8b58-default-rtdb.firebaseio.com/cart.json')

        if(!res.ok) throw new Error()

        const data = await res.json()

        return {
            cartItems: data?.cartItems || [],
            totalQuantity: data?.totalQuantity || 0
        }
    }
)

export const sendCartData = createAsyncThunk(
    'cart/sendData',
    async (cart) => {
        const config = {
            method: 'PUT',
            body: JSON.stringify({
                cartItems: cart.cartItems,
                totalQuantity: cart.totalQuantity
            }),
        }
        
        const res = await fetch('https://react-movie-db-a8b58-default-rtdb.firebaseio.com/cart.json', config)

        if(!res.ok) throw new Error()
    }
)

// Creating our own custom action creator thunk
// export const sendCartData = (cart) => {
//     return async (dispatch) => {
//         const sendRequest = async () => {
//             dispatch(
//                 uiSliceActions.showNotification({
//                     status: 'pending',
//                     title: 'Sending...',
//                     message: 'Sending cart data!',
//                 })
//             )

//             const res = await fetch(
//                 'https://react-movie-db-a8b58-default-rtdb.firebaseio.com/cart.json',
//                 {
//                     method: 'PUT',
//                     body: JSON.stringify({
//                         cartItems: cart.cartItems,
//                         totalQuantity: cart.totalQuantity
//                     }),
//                 }
//             )

//             if (!res.ok) {
//                 throw new Error('Sending cart data failed.')
//             }

//             dispatch(
//                 uiSliceActions.showNotification({
//                     status: 'success',
//                     title: 'Success!',
//                     message: 'Sent cart data successfully!',
//                 })
//             )
//         }

//         try {
//             if(cart.changed)
//                 await sendRequest()
//         } catch (error) {
//             dispatch(
//                 uiSliceActions.showNotification({
//                     status: 'error',
//                     title: 'Error!',
//                     message: 'Sending cart data failed!',
//                 })
//             )
//         }
//     }
// }