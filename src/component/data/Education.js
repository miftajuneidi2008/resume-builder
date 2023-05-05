import { createSlice } from "@reduxjs/toolkit";

const education = [{title:"",departement:"",school:"",from:"",to:""},]

const educationSlice = createSlice({
    name:'education',
    initialState:{value:education},
    reducers:{
        educations: (state,action) =>
        {
            state.value.push(action.payload);
        }

    }
})
export const {educations} = educationSlice.actions;
export default educationSlice.reducer;