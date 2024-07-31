import { createSlice,createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";
import { json } from "react-router-dom";

export const fetchProduct=createAsyncThunk('productSlice/fetchProduct',async()=>{
    const response=await axios.get('https://dummyjson.com/products')
    localStorage.setItem('products', JSON.stringify(response.data.products))
    return response.data.products
})


  const productSlice=createSlice({
    name:'productSlice',
    initialState:{
        product:[],
        productcontainer:[],
        loading:false,
        currentPage:1,
        productsPerPage:10,
        error:""
    },
    reducers:{
        //since product state is not an asynchronus action in reducers
        productsearch:(state,action)=>{
state.product=state.productcontainer.filter((item)=>item.title.toLowerCase().includes(action.payload))
        },
        nextPage:(state,action)=>{
            state.currentPage++
        },
        prevPage:(state,action)=>{
state.currentPage--
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProduct.pending,(state,action)=>{
            state.loading=true
        })
        builder.addCase(fetchProduct.fulfilled,(state,action)=>{
            state.loading=false
            state.product=action.payload
            state.productcontainer=action.payload
        }) 
        builder.addCase(fetchProduct.rejected,(state,action)=>{
            state.product=[]
            state.productcontainer=[]
            state.error='api loading error !!'
            state.loading=false

        })
    }

})


export const {productsearch,nextPage,prevPage}=productSlice.actions
export default productSlice.reducer
