import { createSlice } from '@reduxjs/toolkit'

const initialUIState = {
    cartIsShown: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialUIState,
    reducers: {
        toggleCart(state) {
            state.cartIsShown = !state.cartIsShown
        },
    },
})

export const uiSliceActions = uiSlice.actions

export default uiSlice.reducer