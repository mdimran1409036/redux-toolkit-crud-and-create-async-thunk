import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();

        return data;
    } catch (error) {
        throw Error(error);
    }
});

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        error: null,
        users: [],
        loading: false,
    },
    reducers: {},
    extraReducers: {
        [fetchUsers.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.users = action.payload;
        },
        [fetchUsers.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
    },
});
export default usersSlice.reducer;
