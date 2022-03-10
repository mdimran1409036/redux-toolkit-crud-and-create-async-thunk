import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        value: [],
    },
    reducers: {
        addTodo: (state, { payload }) => {
            state.value.push(payload);
        },
        deleteTodo: (state, { payload }) => {
            state.value.forEach((item) => {
                if (item.id === payload) {
                    const index = state.value.indexOf(item);
                    if (index > -1) {
                        state.value.splice(index, 1); // 2nd parameter means remove one item only
                        return;
                    }
                }
            });
        },
        updateTodo: (state, { payload }) => {
            state.value.forEach((item) => {
                if (item.id === payload.id) {
                    const index = state.value.indexOf(item);
                    if (index > -1) {
                        state.value[index].name = payload.name;
                        return;
                    }
                }
            });
        },
    },
});
export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
