import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({

    name: "user",
    initialState: {users : [] , isLoading : false , error : ''},
    reducers: {
        fetchUserRequest : (state , action) => {
            
        },
        fetchUserSuccess : (state , action) => {
            state.users = action.payload;
        },
        fetchUserError : (state , action) => {
            state.error = action.payload;
        }
    }

})

export const {fetchUserRequest , fetchUserSuccess , fetchUserError} = userSlice.actions;
export default userSlice.reducer