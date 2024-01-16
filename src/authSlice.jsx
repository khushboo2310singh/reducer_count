import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoggedIn:false,
    email:null,
    userName: null,
    userID: null,
}
const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        activeUser: (state,action)=>{
            console.log(action.payload);
            state.isLoggedIn= true;
            const {email, userName,userID}= action.payload;
            state.email = email;
            state.userName= userName;
            state.userID = userID;
        },

        remove_activeUser: (state,action)=>{
            state.isLoggedIn= false;
           console.log(state.isLoggedIn);
            state.email = null;
            state.userName=null ;
            state.userID =null;
        }

    }
})
export const {activeUser, remove_activeUser} =authSlice.actions;
export const selectEmail =(state)=>state.auth.email;
export const selectIsLoggedIn =(state)=>state.auth.isLoggedIn;
export const selectUserName =(state)=>state.auth.userName;
export const selectUserID =(state)=>state.auth.userID;
export default authSlice.reducer;