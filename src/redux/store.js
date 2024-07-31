import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import wishSlice from "./slices/wishSlice";
import cartslice from "./slices/cartslice";

const store=configureStore({
    reducer:{
productSlice ,
//need object here
//here since we gave only productslice ,key and value of the object will be product slice only
wishSlice,
cartslice
    }
})

export default store