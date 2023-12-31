 
import {createSlice} from '@reduxjs/toolkit';

export const userSlice=createSlice({
    name:'user',
    initialState:{value:{name:'nithinrajkumar792@gmail.com'}},

    reducers:{
        login:(state,action)=>{
            state.value=action.payload;
        }
    }

})
export const {login}=userSlice.actions;
export const selectUser =(state) => state.user.user;

export default userSlice.reducer;