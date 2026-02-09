import { createSlice } from "@reduxjs/toolkit";


const authReducers = createSlice({
    name: "auth",
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        userInfo: ''
    },
    reducers: {},
    //       extraReducers: (builder) => {
    //     // builder.addCase(login.pending, (state) => {})
    //   }
});


export default authReducers.reducer;