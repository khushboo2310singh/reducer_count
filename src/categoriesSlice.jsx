import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    categories:[],
    status:"idle",
};
const categoriesSlice=createSlice({

    name:"categories",
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(fetchCategoryJewellery.pending,(state,action)=>{
            state.status="wait";
        })
        .addCase(fetchCategoryJewellery.fulfilled,(state,action)=>{
            state.categories=action.payload;
            state.status="idle";
        })
        .addCase(fetchCategoryJewellery.rejected,(state,action)=>{
            state.status="error";
        })
        .addCase(fetchCategoryMen.pending,(state,action)=>{
            state.status="wait";
        })
        .addCase(fetchCategoryMen.fulfilled,(state,action)=>{
            state.categories=action.payload;
            state.status="idle";
        })
        .addCase(fetchCategoryMen.rejected,(state,action)=>{
            state.status="error";
        })
        .addCase(fetchCategoryWomen.pending,(state,action)=>{
            state.status="wait";
        })
        .addCase(fetchCategoryWomen.fulfilled,(state,action)=>{
            state.categories=action.payload;
            state.status="idle";
        })
        .addCase(fetchCategoryWomen.rejected,(state,action)=>{
            state.status="error";
        })
        .addCase(fetchCategoryElectronics.pending,(state,action)=>{
            state.status="wait";
        })
        .addCase(fetchCategoryElectronics.fulfilled,(state,action)=>{
            state.categories=action.payload;
            state.status="idle";
        })
        .addCase(fetchCategoryElectronics.rejected,(state,action)=>{
            state.status="error";
        })
    }
});

export const fetchCategoryMen = createAsyncThunk(
    'men/get',
    async () =>{
        const response= await axios.get("https://fakestoreapi.com/products/category/men's clothing");
       console.log(response.data );
        return response.data;
    }
) 
export const fetchCategoryWomen = createAsyncThunk(
    'women/get',
    async () =>{
        const response= await axios.get("https://fakestoreapi.com/products/category/women's clothing");
       console.log(response.data );
        return response.data;
    }
) 
export const fetchCategoryJewellery = createAsyncThunk(
    'jewellery/get',
    async () =>{
        const response= await axios.get('https://fakestoreapi.com/products/category/jewelery');
       console.log(response.data );
        return response.data;
    }
) 
export const fetchCategoryElectronics = createAsyncThunk(
    'electronics/get',
    async () =>{
        const response= await axios.get('https://fakestoreapi.com/products/category/electronics');
       console.log(response.data );
        return response.data;
    }
) 
export default categoriesSlice.reducer;
