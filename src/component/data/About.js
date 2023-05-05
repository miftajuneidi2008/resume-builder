import { createSlice } from "@reduxjs/toolkit";

const about = {about:""}

const aboutSlice = createSlice({
    name:'about',
    initialState:{value:about},
    reducers:{
        aboutMe: (state,action) =>
        {
            state.value = action.payload;
        }

    }
})
export const {aboutMe} = aboutSlice.actions;
export default aboutSlice.reducer;
