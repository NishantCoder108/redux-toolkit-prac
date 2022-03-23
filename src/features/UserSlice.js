import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({

    name :"user",
    initialState:[],

    reducers:{
       addUsers :(state,action) =>{
           state=  [...state ,action.payload]
           return state;

       },

    }
})

export  const {addUsers} = userSlice.actions; //action automatically create with payload


export const selectUser = (state) =>state.user; //when pull the data ,we are using useSelector  , it is same as that .(For Receiving the data )
// useSelector ((state) => state.user)


export default userSlice.reducer; //it export the reducer of userSlice
