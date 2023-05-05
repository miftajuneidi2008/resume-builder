import { createSlice } from "@reduxjs/toolkit";

const skills = [{skill:""},]

const skillSlice = createSlice({
    name:'skill',
    initialState:{value:skills},
    reducers:{
        addSkill: (state,action) =>
        {
            state.value.push(action.payload);
        }

    }
})
export const {addSkill} = skillSlice.actions;
export default skillSlice.reducer;