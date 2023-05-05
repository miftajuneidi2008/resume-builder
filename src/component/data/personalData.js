import { createSlice } from "@reduxjs/toolkit";

const personalInfo = {fullname:"",phone:"",date:"",email:"",linked:"",github:""}

const personalSlice = createSlice({
    name:'personal',
    initialState:{value:personalInfo},
    reducers:{
        addPerson: (state,action) =>
        {
            state.value = action.payload;
        }

    }
})
export const {addPerson} = personalSlice.actions;
export default personalSlice.reducer;
