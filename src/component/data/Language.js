import { createSlice } from "@reduxjs/toolkit";
const language = [{language:"",write:"",speak:"",listen:"",read:""},]

const languageSlice = createSlice({
    name:'education',
    initialState:{value:language},
    reducers:{
        languages: (state,action) =>
        {
            state.value.push(action.payload);
        }

    }
})
export const {languages} = languageSlice.actions;
export default languageSlice.reducer;