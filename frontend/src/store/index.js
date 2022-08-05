import { configureStore, createSlice } from "@reduxjs/toolkit";
const LoginSlice=createSlice({
    name:"Login",   
    initialState:{isLoggedIn:false},
    reducers:{
        login(state){
            state.isLoggedIn=true;
        },
        logout(state){
            state.isLoggedIn=false;
        },
    },
});

const LoginActions=LoginSlice.actions;
const store=configureStore({
    reducer:LoginSlice.reducer,
});
export {LoginActions,store};