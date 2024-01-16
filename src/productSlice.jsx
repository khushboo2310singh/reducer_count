import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useParams } from "react-router-dom";
const initialState={
    products:[],
    status:'idle',
   
};
const productsSlice=createSlice({
    name:'products',
    initialState,    
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProducts.pending,(state,action)=>{
            state.status="wait";
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.products=action.payload;
            state.status="idle";
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
            state.status="error";
        })      
    }
});
export const fetchProducts = createAsyncThunk(
    'products/get',
    async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      //console.log(response.data);
      return response.data;
    }
  )
export default productsSlice.reducer;