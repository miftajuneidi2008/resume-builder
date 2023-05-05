import { createSlice } from "@reduxjs/toolkit";

const projects = [{title:"",about:""},]

const projectSlice = createSlice({
    name:'pro',
    initialState:{value:projects},
    reducers:{
        Projects: (state,action) =>
        {
            state.value.push(action.payload);
        }

    }
})
export const {Projects} = projectSlice.actions;
export default projectSlice.reducer;