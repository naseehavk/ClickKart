import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartlist: []
    },
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.cartlist.find(item => item.id == action.payload.id)
            if (existingProduct) {
                existingProduct.quantity += 1
            }
            else {
                state.cartlist.push({ ...action.payload, quantity: 1 })
                alert('Item added to cart !!!')
            }
            console.log(state);
        },
        removeFromCart: (state, action) => {
            state.cartlist = state.cartlist.filter(item => item.id != action.payload)
            alert('Item removed from  cart !!!')
        },
        emptyCart: (state) => {
            state.cartlist = []
            alert("Order Confirmed!!")
        },
        decreaseQuantity: (state, action) => {
            const existingProduct = state.cartlist.find(item => item.id == action.payload.id)
            if (existingProduct.quantity == 1) {
                state.cartlist = state.cartlist.filter(item => item.id != action.payload.id)
            }
            else {
                existingProduct.quantity--
            }
        }
    }
})

export const { addToCart, removeFromCart, emptyCart, decreaseQuantity } = cartSlice.actions
export default cartSlice.reducer