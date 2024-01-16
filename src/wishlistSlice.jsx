import { createSlice } from "@reduxjs/toolkit";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const initialState={
    wish:[]
};  

const wishlistSlice= createSlice(
    {
        name:"wish",
        initialState,
        reducers:{
            addtoPro:(state,action)=>{
                const obj={...action.payload, quantity:1}
            const records = state.wish;
            const index = records.findIndex(row=>row.id === obj.id);
            if(index===-1)
            {
                records.push(obj);
                
            state.wish=records; 
            toast.success('Added to wishlist!!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            }
            else{
                
            state.wish=records; 
            toast.info('Already added to wishlist', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            }
         
            },
            removePro:(state,action)=>{
                state.wish.splice(action.payload,1)
            }
        }
    }
);
export const {addtoPro, removePro}=wishlistSlice.actions;
export default wishlistSlice.reducer;