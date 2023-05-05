import { createSlice } from "@reduxjs/toolkit";

const work = [{title:"",organization:"",from:"",to:""},]

const workSlice = createSlice({
    name:'work',
    initialState:{value:work},
    reducers:{
        works: (state,action) =>
        {
            state.value.push(action.payload);
        }

    }
})
export const {works} = workSlice.actions;
export default workSlice.reducer;